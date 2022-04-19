import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {
    path: 'admin',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent},
  { path:'footer',component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
