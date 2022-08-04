import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    uname:'',
    password:''
  }

  constructor( private _router:Router) { }

  ngOnInit(): void {
  }

  signupUser(){
  
    this._router.navigate(['/login'])
  }

}
