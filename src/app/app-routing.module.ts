import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ResearchComponent } from './research/research.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: {animation: 'home'},
  },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent,
    data: {animation: 'about'},
  },
  //{ path: '', redirectTo: '/work', pathMatch: 'full' },
  {
    path: 'work',
    component: WorkComponent,
    data: {animation: 'work'},
  },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'research',
    component: ResearchComponent,
    data: {animation: 'research'},
  },
  //{ path: '', redirectTo: '/header', pathMatch: 'full' },
  {
    path: 'header',
    component: HeaderComponent,
  },
  //{ path: '', redirectTo: '/footer', pathMatch: 'full' },
  {
    path: 'footer',
    component: FooterComponent,
  },
  //{ path: '', redirectTo: '/scrolltop', pathMatch: 'full' },
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
