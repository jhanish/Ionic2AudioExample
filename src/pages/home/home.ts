import { Component } from '@angular/core';
import { MediaPlugin } from 'ionic-native';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, platform: Platform) {
    platform.ready().then(function() {
      console.log("THE PLATFORM IS READY!");
      console.log(platform.platforms());
      
      var file = new MediaPlugin('assets/sound.mp3');

      file.init.then(() => {
        console.log('Playback Finished');
      }, (err) => {
        console.log('somthing went wrong! error code: ' + err.code + ' message: ' + err.message); 
      });

      file.play();

    });  
  }


}
