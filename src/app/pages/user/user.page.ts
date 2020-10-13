import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { tap } from 'rxjs/operators';
import { AfiliadoService } from '../../services/afiliado.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  selected_genero:string;
  fecha:string;
  imageIne:string;
  imagePath: string = 'http://apiform.test/storage/images/';
  data: any;
  isSubmitted = false;
  
  constructor(
    private camera: Camera,
    private afiliadoService: AfiliadoService,
  ) {
    this.data = {
      name: '',
      apellido: '',
      telefono: '',
    };
   }

  ngOnInit() {
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

  save(form: NgForm) {
    this.isSubmitted = true;
    // console.log(form);
    this.afiliadoService.register(form.value);

  }

  noSubmit(e) {
    e.preventDefault();
  }

}
