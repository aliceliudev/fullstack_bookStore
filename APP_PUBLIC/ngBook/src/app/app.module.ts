import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { AboutComponent } from './components/about/about.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { CreatenewbookComponent } from './components/createnewbook/createnewbook.component';
import { BookService } from './services/book.service';

import { HttpClientModule } from '@angular/common/http';
import { PicComponent } from './components/pic/pic.component';
import { SidetextComponent } from './components/sidetext/sidetext.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooklistComponent,
    AboutComponent,
    BookdetailsComponent,
    CreatenewbookComponent,
    PicComponent,
    SidetextComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService,
     {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
