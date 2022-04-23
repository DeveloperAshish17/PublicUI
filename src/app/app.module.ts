import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './@structure/components/footer/footer.component';
import { SidebarComponent } from './@structure/components/sidebar/sidebar.component';
import { HeaderComponent } from './@structure/components/header/header.component';
import { HomeMainComponent } from './@structure/home-main/home-main.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    HomeMainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
