import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginPageComponent } from '../login-page/login-page.component';
import { AuthGuard } from '../services/auth-guard.service';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    GridModule,
    DialogModule,
    ButtonsModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.chasingDots,
      primaryColour: '#2bb0d8',
      secondaryColour: '#2bb0d8',
      tertiaryColour: '#2bb0d8'
    }),
    AppRouting,
    DialogsModule,
    ExcelExportModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
