import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  id !: number ;
  firstName !: string;
  lastName !: string;
  phoneNumber !: number;
  birthday !: string;


  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.firstName = params['firstName'];
      this.lastName = params['lastName'];
      this.phoneNumber = params['phoneNumber'];
      this.birthday = params['birthday'];
    });
  }
}