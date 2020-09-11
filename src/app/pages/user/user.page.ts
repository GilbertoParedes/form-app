import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from 'src/app/services/env.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  token:any = '';
  selected_genero:string;
  fecha:string;
  imageIne:string;
  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
    private camera: Camera,
  ) { }

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
    console.log(form.value);
    // let data = [form.value];
    // cabeceras de peticiones
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.env.API_URL + 'api/auth/afiliados', 
      { 
        name: form.value.name, apellido: form.value.apellido, telefono: form.value.telefono, genero: form.value.genero,
        image_ine: form.value.image, edo_civil: form.value.estado_civ, fecha_nacimiento: form.value.fecha,
        lugar_nacimiento: form.value.nacimiento, casa_propia: form.value.casa_propia
      }
    ).subscribe(res => {
      console.log(res)
    }, (err) =>{
      console.log(err)
    })

  }

}
