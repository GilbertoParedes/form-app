import { Component, OnInit } from '@angular/core';
import { AfiliadoService } from '../../../services/afiliado.service';
import { Afiliado } from '../../../models/afiliado';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { from } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {

  afiliados:Array<object> = [];

  constructor(
    private afiliadoService: AfiliadoService,
    private router: Router
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

  edit(user) {
    console.log("Id usuario: " + user);
    this.router.navigate(["user-update"], {
      state: {
        user: JSON.stringify(user)
      }
    })
  }
}
