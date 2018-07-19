import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';
import { AuthGuard } from '../services/auth-guard.service';
import { MainPageComponent } from './pages/main-page/main-page.component';
//import {} from '../app/pages/assetsView.module#AssetViewModule'

export const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginPageComponent },
  { path: ':id', component: LoginPageComponent },
  { path: 'page/main', component: MainPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {

}
