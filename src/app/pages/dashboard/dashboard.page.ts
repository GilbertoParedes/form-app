import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
// import { UserPage } from '../user/user.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user: User;

  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController
  ) { 
    this.menu.enable(true);
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.authService.user().subscribe(
      user => {
        this.user = user;
      }
    );
  }

  create() {
     this.navCtrl.navigateForward('user');
  }

  listUSer(){
    // this.navCtrl.navigateForward('');
  }

}
