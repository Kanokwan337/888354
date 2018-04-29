import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public arr_users: Users[];  
  constructor(public users:UsersService){ }  

  ngOnInit(){
    this.users.get_user().subscribe((response) => {
        //console.log("log :" + response);
        this.arr_users = response; 
      });

  }

}

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
}
