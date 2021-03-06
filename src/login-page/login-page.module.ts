import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageRouting } from './login-page.routing';
import { LoginPageComponent } from './login-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        LoginPageRouting,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [LoginPageComponent],
})
export class LoginPageModule {
}