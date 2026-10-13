import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private router: Router) {}
    users = {
      id : 1 ,
      firstName : 'ali',
      lastName : 'ahmadi',
      phoneNumber: 21085,
      birthday:'06.09.1985' ,
    };
  public openPageLogin(){
    this.router.navigate(['/login'], { 
      queryParams: this.users ,
      replaceUrl: true
    });
  }
  public openPageSignIn(){
    this.router.navigate(['/sign-in'], { 
      queryParams: this.users ,
      replaceUrl: true
    });
  }
}