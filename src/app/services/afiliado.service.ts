import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { AuthService } from 'src/app/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {
  token:any;
  
  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
    private authService: AuthService,
  ) { }

  register(name: String) {

    const headers = new HttpHeaders({
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    

    // name: form.value.name, apellido: form.value.apellido, telefono: form.value.telefono, genero: form.value.genero,
    // image_ine: form.value.image, edo_civil: form.value.estado_civ, fecha_nacimiento: form.value.fecha,
    // lugar_nacimiento: form.value.nacimiento, casa_propia: form.value.casa_propia

    return this.http.post(this.env.API_URL + 'api/auth/afiliados', 
      { name: name}, { headers: headers }
    )
  }

}


