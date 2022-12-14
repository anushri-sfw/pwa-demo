import { Component } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jwtToken: any;
  decoded: any;
  userName ='Anushri';
  password = 'Anushrisfw@123';
  pin!: string;
  loginForm!: UntypedFormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router) { 
    this.loginForm = this._formBuilder.group({
      userName: new UntypedFormControl(''),
      password: new UntypedFormControl(''),
    });
  }

  login() {
    this._router.navigate(['register']);
    //this.loginForm.reset();
  }
}
