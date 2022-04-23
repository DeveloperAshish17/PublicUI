import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainHomeComponent } from './main-home/main-home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: {},
    children: [
      {
        path: 'home', component: MainHomeComponent, data: { title: 'Main' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
