import { Component, OnInit } from '@angular/core';
import { SpaFxUserApi } from '../spafx-user-api';

@Component({
  selector: 'spafx-sign-in',
  templateUrl: './spafx-sign-in.component.html',
  styleUrls: ['./spafx-sign-in.component.css']
})
export class SpaFxSignInComponent implements OnInit {

  formError: string;
  submitting = false;
  constructor(private userApi: SpaFxUserApi) { }

  ngOnInit() {
  }

}
