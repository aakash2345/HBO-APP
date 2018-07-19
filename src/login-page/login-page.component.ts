import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Router, Route, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';


@Component({
  selector: 'login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss'],
})
export class LoginPageComponent implements OnInit {
  private paramBackgroundColor: string = 'white';
  userIdValidation = new FormControl('', [Validators.required]);

  public hide = true;
  loginForm: FormGroup;
  private submitted = false;
  //   private user: UserModel[];
  userDefinedId: string;
  password: string;

  public loading = false;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    // this.route.queryParams.subscribe((params: Params) => {
    //   console.log(params);
    // });
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id != null) {
      this.paramBackgroundColor = id;
    }
    //#ffb91d
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern("(^|\W)admin($|\W)"), //"^(?<![\w\d])admin(?![\w\d])$" // /(^|\W)cos($|\W)/
      ],],
      password: ['',
        [
          Validators.required,
          Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9]).{8,}"),
          Validators.minLength(8)
        ],
        this.validPassword.bind(this)]
    });
  }
  validPassword(control: AbstractControl) {
    return observableOf('12345678910' === control.value).pipe(
      map(result => result ? { invalid: true } : null)
    );
  }
  // ['', [Validators.required, Validators.maxLength(8)]]
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let login = this.loginForm.value;
    sessionStorage.setItem('userName', login.name);
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
    this.router.navigateByUrl('/page/main');
  }
  get f() { return this.loginForm.controls; }
}

