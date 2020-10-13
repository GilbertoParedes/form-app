import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from 'src/app/services/env.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Afiliado } from '../models/afiliado';
import { Observable, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert.service';
import { NavController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  token:any = '';

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
    private authService: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController,
  ) { }

  register(form: Object) {

    this.token = this.storage.getItem('token').then(token => {
    // let data = form['name'];

      this.token = token;
    
      const headers = new HttpHeaders({
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json',
        'Authorization': this.token["token_type"]+" "+this.token["access_token"]
      });
  
      return this.http.post(this.env.API_URL + 'api/auth/afiliados', 
        { name: form['name'], apellido: form['apellido'],
      telefono: form['telefono'], sexo: form['genero'], image_ine: form['image'],
      estado_civil: form['estado_civ'], fecha_nacimiento: form['f_nacimiento'],
      lugar_nacimiento: form['l_nacimiento'], estado_vivienda: form['casa_propia'],
      tiempo_viviendo: form['tiempo_viviendo'], calle: form['calle'], colonia: form['colonia'],
      dep_menores: form['dep_menores'], dep_tercera_edad: form['dep_mayores'],
      vivienda_compartida: form['vivienda_compartida'], cant_menores: form['cant_menores'],
      cant_mayores: form['cant_mayores'], cant_viviendo: form['cant_viviendo'],
      celular: form['celular'], whatsapp: form['whatsapp'], facebook: form['facebook']
      }, { headers: headers }
      ).subscribe(
        data => {
          this.alertService.presentToast("Afiliado Regístrado");
          console.log(data);
        },
        error => {
          let toast = this.alertService.presentToast(error.message);
          console.log(error)
        },
        () => {
          this.navCtrl.navigateRoot('/list-user');
        }
      );
    })
  }

  afiliados(): Observable<any> { 

    return Observable
        .fromPromise(this.storage.getItem('token'))
        .flatMap(token => {
            
            this.token = token;

            const headers = new HttpHeaders({
              'Accept': 'application/json, text/plain',
              'Content-Type': 'application/json',
              'Authorization': this.token["token_type"]+" "+this.token["access_token"]
            });
            
            return this.http.get(this.env.API_URL + 'api/auth/afiliados', { headers: headers })
            // .pipe(
            //   tap(afili => {
            //     return afili;
            //   })
            // )
        })
  }

}
//   afiliados(){
//     this.token = this.storage.getItem('token').then(token => {
//       // let data = form['name'];
  
//         this.token = token;
      
//         const headers = new HttpHeaders({
//           'Accept': 'application/json, text/plain',
//           'Content-Type': 'application/json',
//           'Authorization': this.token["token_type"]+" "+this.token["access_token"]
//         });
   
//     return this.http.get(this.env.API_URL + 'api/auth/afiliados', { headers: headers })
//     .pipe(
//       tap(data => {
//         return data;
//       })
//     )


