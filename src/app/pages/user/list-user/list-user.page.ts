import { Component, OnInit } from '@angular/core';
import { AfiliadoService } from '../../../services/afiliado.service';
import { Afiliado } from '../../../models/afiliado';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { from } from 'rxjs';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {

  afiliados:Array<object> = [];
  imagePath: string = this.env.API_URL+'storage/images/';
  

  constructor(
    private afiliadoService: AfiliadoService,
    private router: Router,
    private env: EnvService,
  ) { }

  ngOnInit() {
    this.getDataAfiliado();
  }

  async getDataAfiliado() {
    await this.afiliadoService.afiliados().subscribe(
      resp => {
        this.afiliados = resp;
        console.log(this.afiliados);
      }, 
      error => {
        console.log(error);  
      }
    )
  }

  addUser() {
    this.router.navigate(["user"]);
  }

  edit(user) {
    console.log("Id usuario: " + user);
    this.router.navigate(["user-update"], {
      state: {
        user: JSON.stringify(user)
      }
    })
  }
}
