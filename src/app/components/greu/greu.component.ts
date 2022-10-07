import { Component, ViewChild, ElementRef, OnInit } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'

import { Conversation, UserAgent, Session, Stream } from '@apirtc/apirtc';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-greu',
  templateUrl: './greu.component.html',
  styleUrls: ['./greu.component.css']
})
export class GreuComponent implements OnInit {
  title = 'ApiRTC-angular';
users:any;
  @ViewChild("localVideo") videoRef: ElementRef | any;

  conversationFormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required])
  });

  constructor(private fb: FormBuilder,private dataService: DataService) {
  }
  ngOnInit(): void {
  this.getOrcreateConversation();
  }
getusersdata(){
  this.dataService.getUser().subscribe(res => {
    this.users = res;
  })
}
  get conversationNameFc(): FormControl {
    return this.conversationFormGroup.get('name') as FormControl;
  }

  conversation: any;
  remotesCounter = 0;

  getOrcreateConversation() {
    var localStream: Stream | null | undefined = null;

    //==============================
    // 1/ CREATE USER AGENT
    //==============================
    var userAgent = new UserAgent({
      uri: 'apiKey:b2f23182a24c18ca85f5780c09484069'
    });

    //==============================
    // 2/ REGISTER
    //==============================
    userAgent.register().then((session: Session) => {

      //==============================
      // 3/ CREATE CONVERSATION
      //==============================
      const conversation: Conversation = session.getConversation(this.conversationNameFc.value);
      this.conversation = conversation;

      //==========================================================
      // 4/ ADD EVENT LISTENER : WHEN NEW STREAM IS AVAILABLE IN CONVERSATION
      //==========================================================
      conversation.on('streamListChanged', (streamInfo: any) => {
        console.log("streamListChanged :", streamInfo);
        if (streamInfo.listEventType === 'added') {
          if (streamInfo.isRemote === true) {
            conversation.subscribeToMedia(streamInfo.streamId)
              .then((stream: Stream) => {
                console.log('subscribeToMedia success', stream);
              }).catch((err) => {
                console.error('subscribeToMedia error', err);
              });
          }
        }
      });
      //=====================================================
      // 4 BIS/ ADD EVENT LISTENER : WHEN STREAM IS ADDED/REMOVED TO/FROM THE CONVERSATION
      //=====================================================
      conversation.on('streamAdded', (stream: Stream) => {
        this.remotesCounter += 1;
        stream.addInDiv('remote-container', 'remote-media-' + stream.streamId, {}, false);
      }).on('streamRemoved', (stream: any) => {
        this.remotesCounter -= 1;
        stream.removeFromDiv('remote-container', 'remote-media-' + stream.streamId);
      });

      //==============================
      // 5/ CREATE LOCAL STREAM
      //==============================
      userAgent.createStream({
        constraints: {
          audio: true,
          video: true
        }
      })
        .then((stream: Stream) => {

          console.log('createStream :', stream);

          // Save local stream
          localStream = stream;

          // Display stream
          localStream.attachToElement(this.videoRef.nativeElement);

          //==============================
          // 6/ JOIN CONVERSATION
          //==============================
          conversation.join()
            .then(() => {
              //==============================
              // 7/ PUBLISH LOCAL STREAM
              //==============================
              conversation.publish().then((stream: Stream) => {
                console.log('published', stream);
              }).catch((err: any) => {
                console.error('publish error', err);
              });
            }).catch((err: any) => {
              console.error('Conversation join error', err);
            });
        }).catch((err: any) => {
          console.error('create stream error', err);
        });
    });
  }
}