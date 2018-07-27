import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss'],
})
export class LoginPageComponent implements OnInit {

  private paramBackgroundColor: string = 'white';
  public hide = true;
  loginForm: FormGroup;
  private submitted = false;
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
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern("(^|\W)admin($|\W)"),
      ],],
      //"^(?<![\w\d])admin(?![\w\d])$" // /(^|\W)cos($|\W)/
      password: ['',
        [
          Validators.required,
          Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9]).{8,}"),
          Validators.minLength(8)
        ],
        // this.validPassword.bind(this)
      ]
    });
  }
  // validPassword(control: AbstractControl) {
  //   return observableOf('12345678910' === control.value).pipe(
  //     map(result => result ? { invalid: true } : null)
  //   );
  // }
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

