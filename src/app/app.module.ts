import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { WorkComponent } from './work/work.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ResearchComponent } from './research/research.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ScrollTopComponent,
    WorkComponent,
    AboutComponent,
    ResearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    RouterModule.forChild([
      { path: '', component: AppComponent, children: [
        { path: 'home', component: HomeComponent, data: { label: 'Home' } },
        { path: 'about', component: AboutComponent, data: { label: 'About' } },
        { path: 'work', component: WorkComponent, data: { label: 'Work' } },
        { path: 'research', component: ResearchComponent, data: { label: 'Research' } }
      ] }
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
