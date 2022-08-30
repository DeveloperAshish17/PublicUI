import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';


import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule
  ]
})
export class PagesModule { }
