import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  user:object = {};
  imageIne:string = '';
  imagePath: string = 'http://apiform.test/storage/images/';

  constructor(public router: Router, public route: ActivatedRoute, private camera: Camera,) { }

  

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {

      const state = this.router.getCurrentNavigation().extras.state;
      this.user = JSON.parse(state.user);

    }
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imageIne = base64Image;
    }, (err) => {
     // Handle error
    });
  }

}
