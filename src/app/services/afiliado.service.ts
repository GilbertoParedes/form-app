import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from 'src/app/services/env.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { tap } from 'rxjs/operators';

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
      vivienda_compartida: form['vivienda_compartida']
      }, { headers: headers }
      ).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error)
        }
      );
    })
  }

  afiliados(){
    this.token = this.storage.getItem('token').then(token => {
      // let data = form['name'];
  
        this.token = token;
      
        const headers = new HttpHeaders({
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json',
          'Authorization': this.token["token_type"]+" "+this.token["access_token"]
        });
   
    return this.http.get(this.env.API_URL + 'api/auth/afiliados', { headers: headers })
    .pipe(
      tap(data => {
        return data;
      })
    )
}
