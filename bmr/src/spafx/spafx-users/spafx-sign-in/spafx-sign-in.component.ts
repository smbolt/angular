import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SpaFxUserApi } from '../spafx-user-api';

@Component({
  selector: 'spafx-sign-in',
  templateUrl: './spafx-sign-in.component.html',
  styleUrls: ['./spafx-sign-in.component.css']
})
export class SpaFxSignInComponent implements OnInit {

  formError: string;
  submitting = false;
  constructor(private userApi: SpaFxUserApi, private router: Router) { }

  onSubmit(signInForm: NgForm) {
    if (signInForm.valid) {

      console.log('submitting...', signInForm);
      this.submitting = true;
      this.formError = null;

      this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
        .subscribe((data) => {
            console.log('got valid: ', data);
            this.router.navigate(['/authenticated']);
          },
          (err) => {
            this.submitting = false;
            console.log('got error: ', err);
            this.formError = err;
          }
        );
    }
  }

  ngOnInit() {
  }

}
