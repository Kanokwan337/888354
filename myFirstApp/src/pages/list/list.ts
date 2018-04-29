import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  public arr_users: Users[];  

  constructor(public navCtrl: NavController, public navParams: NavParams, public users: UserdataProvider) {
    this.users.get_user().subscribe((response) => {
      //console.log("log :" + response);
      this.arr_users = response;
    });
  }

  // itemTapped(event, item) {
  //   // That's right, we're pushing to ourselves!
  //   this.navCtrl.push(ListPage, {
  //     item: item
  //   });
  // }
}

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
}