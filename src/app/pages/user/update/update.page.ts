import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  user:object = {};

  constructor(public router: Router, public route: ActivatedRoute) { }

  

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {

      const state = this.router.getCurrentNavigation().extras.state;
      this.user = JSON.parse(state.user);

    }
    // this.route.params.subscribe(params => {
    //   let user = JSON.parse(params['user']);
    //   console.log("Usuario a editar: "+ user);
    // });
  }

}
