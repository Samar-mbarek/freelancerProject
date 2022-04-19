import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path: "freelancers", component: FreelancerComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "sidebar", component: SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
