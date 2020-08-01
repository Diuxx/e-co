import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './_routing/app-routing.module';
import { AppComponent }     from './app.component';

// primeng modules
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem }        from 'primeng/api';                  //api3

// components
import { NotFoundComponent }                from './_components/not-found/not-found.component';
import { HomeComponent }                    from './_components/home/home.component';
import { ArticleComponent }                 from './_components/home/article/article.component';
import { AvisComponent }                    from './_components/avis/avis.component';
import { HeaderComponent }                  from './_components/header/header.component';

// service
import { PathResolveService }               from './_services/pathResolve.service';
import { ArticleService }                   from './_services/article.service';
import { AbstractService }                  from './_services/abstract.service';

// translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader }              from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule }     from '@angular/common/http';

// primeng
import { DropdownModule }                   from 'primeng/dropdown';
import { TabViewModule }                    from 'primeng/tabview';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvisComponent,
    ArticleComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    DropdownModule,
    TabViewModule
  ],
  providers: [
    PathResolveService,
    // AbstractService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}