import { Component, OnInit, ViewChild } from '@angular/core';
import { Peer } from "peerjs";

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent implements OnInit {

  @ViewChild('myvideo') myVideo: { nativeElement: any; } | any ;
  
  peer:any;
  anotherid:any;
  mypeerid:any;
  
  constructor() { }

  ngOnInit(): void {
   
    this.peer = new Peer();
    setTimeout(()=>{
      this.mypeerid = this.peer.id;
      
    },3000);
    // this.videoRef = document.getElementById('video');
    // console.log(this.videoRef);
    // this.setupCamera();
    // this.connect();
    // this.join();
    this.peer.on('connection', function(conn: any) {
      conn.on('data', function(data:any){
        // Will print 'hi!'
        console.log(data);
      });
    });
   
    var n = <any>navigator;
    n.getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;
    let video = this.myVideo;
    this.peer.on('call',function(call:any){
      n.mediaDevices.getUserMedia({video:{ width: 1280, height: 720 },audio:true},function(stream:any) {
        call.answer(stream);
        call.on('stream',function(remoteStream:any){
        
          video.src = URL.createObjectURL(remoteStream);
          video.srcObject = remoteStream;
          // video = document.getElementById('video')
          video.play();
        });
      },function(err:any){
        console.log('Failed to connect',err);
      });
    });
  }

  connect(){
  var conn = this.peer.connect(this.anotherid);
// on open will be launch when you successfully connect to PeerServer
   conn.on('open', function(){
  // here you have conn.id
  conn.send('hi!');
});
  }
  videoconnect(){
    let video = this.myVideo;
    var localvar = this.peer;
    var fname = this.anotherid;

    // var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    var n = <any>navigator;
    n.mediaDevices.getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;
    n.getUserMedia({ video: { width: 1280, height: 720 } , audio:true},function(stream: any){
      var call = localvar.call(fname,stream);
      call.on('stream',function(remoteStream:any){
        video.src = URL.createObjectURL(remoteStream);
        video.srcObject = remoteStream;
        video.play(); video.srcObject
      });
    },function(err:any){
      console.log('Failed to connect',err);
    });
  }

  // connect(){
  //   navigator.mediaDevices.getUserMedia({
  //     video:{width:300,height:250},
  //     audio:true
  //   }).then(stream => {
  //     const call = this.peer.call(this.id, stream);
  //     call.on("stream", (remoteStream)=>{
  //       document.getElementById('video');
  //     })
  //   });
  // }

  // join(){
  //   this.peer.on("call", (call:any) => {
  //     navigator.mediaDevices.getUserMedia({
  //       video:{width:300,height:250},
  //         audio:true
  //     }).then(stream => {
  //       call.answer(stream);
        
  //       call.on("stream",()=>{
  //         document.getElementById('join');
  //       })
  //     });
  //   });
  // }

  // setupCamera() {
  //   navigator.mediaDevices.getDisplayMedia({
  //     video:{width:300,height:250},
  //     audio:false
  //   }).then(stram=>{
  //     console.log(stram);
  //     this.videoRef.srcObject = stram;
  //   })
  // }

}
