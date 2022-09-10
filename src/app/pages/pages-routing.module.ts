import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: {},
    children: [
      { path: 'service', component: ServiceComponent, data: { title: 'Service' } },
      { path: 'our-team', component: OurTeamComponent, data: { title: 'Our Team' } },
      { path: 'about-us', component: AboutUsComponent, data: { title: 'About Us' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
