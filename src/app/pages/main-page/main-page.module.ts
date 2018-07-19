import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpModule, Http } from '@angular/http';
import { MainPageRouting } from './main-page.routing';
import { MainPageComponent } from './main-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingModule } from 'ngx-loading';


@NgModule({
    imports: [
        CommonModule,
        MainPageRouting,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
         LoadingModule,
    ],
    declarations: [MainPageComponent],

})
export class MainPageModule {

}