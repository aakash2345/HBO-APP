import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { MainPageModule } from './main-page/main-page.module'

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        MainPageModule

    ],
    declarations: [PagesComponent],
})
export class PagesModule {}