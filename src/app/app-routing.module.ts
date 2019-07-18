import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  {
    path: 'header',
    component: HeaderComponent,
  },
  { path: '', redirectTo: '/footer', pathMatch: 'full' },
  {
    path: 'footer',
    component: FooterComponent,
  },
  { path: '', redirectTo: '/scrolltop', pathMatch: 'full' },
  {
    path: 'scrolltop',
    component: ScrollTopComponent,
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
