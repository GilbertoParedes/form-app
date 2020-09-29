import { Component, OnInit } from '@angular/core';
import { AfiliadoService } from '../../../services/afiliado.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {


  constructor(
    private afiliadoService: AfiliadoService,
  ) { }

  ngOnInit() {
    this.getDataAfiliado();
  }

  async getDataAfiliado() {
    await this.afiliadoService.afiliados().
    subscribe(
      res => {
        console.log(res);
      }, error => {
        console.log(error);
      }
    )
  }
}
