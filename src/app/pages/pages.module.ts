import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';


import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';


@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent,
    AboutUsComponent,
    OurTeamComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule
  ]
})
export class PagesModule { }
