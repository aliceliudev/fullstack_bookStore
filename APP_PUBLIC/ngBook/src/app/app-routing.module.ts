import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { HomeComponent } from './components/home/home.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { CreatenewbookComponent } from './components/createnewbook/createnewbook.component';
import { Book } from './book.model';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'booklist',
    component:BooklistComponent
  },
  {
    path:'booklist/:bookId',
    component:BookdetailsComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'bookdetails',
    component:BookdetailsComponent
  },
  {
    path:'createnewbook',
    component:CreatenewbookComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
