import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './_routing/app-routing.module';
import { AppComponent } from './app.component';

// primeng modules
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';                  //api3

// components
import { NotFoundComponent } from './_components/not-found/not-found.component';
import { HomeComponent } from './_components/home/home.component';
import { PathResolveService } from './_services/pathResolve.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule
  ],
  providers: [PathResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
