import { Component, OnInit ,VERSION, ViewChild, ElementRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-biddersignup',
  templateUrl: './biddersignup.component.html',
  styleUrls: ['./biddersignup.component.css']
})
export class BiddersignupComponent implements OnInit {
  Name=""
  Contact=""
  remail=" ";
  rpassword="";
  rcpassword="";
  address="";
  City="";
  Pincode="";
  panelOpenState = false;

  register(){
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
