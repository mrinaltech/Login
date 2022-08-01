import { Component, OnInit ,VERSION, ViewChild, ElementRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Name=""
  Contact=""
  remail=" ";
  rpassword="";
  rcpassword="";
  address="";
  City="";
  Pincode="";
  panelOpenState = false;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  

  register(){
    
  }



  constructor() { }

  ngOnInit(): void {
  }

}
