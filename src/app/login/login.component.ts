import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  email=" ";
  password="";
  remail=" ";
  rpassword="";
  rcpassword="";
  panelOpenState = false;


  
  login(){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
