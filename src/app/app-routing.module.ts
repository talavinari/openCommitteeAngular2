import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinisterComponent }   from './minister.component';
import { BillsComponent }      from './bills.component';
import { AboutComponent }      from './about.component';
import { BillDetailComponent }  from './bill-detail.component';
import { MinisterDetailComponent }  from './minister-detail.component';
import { MeetingsComponent }  from './meetings.component';
import { IndexComponent}  from './index.component';
import {MeetingDetailComponent} from './meeting-detail.component';

const routes: Routes = [
  { path: 'minister',  component: MinisterComponent },
  { path: 'minister/:id',  component: MinisterDetailComponent },
  { path: 'bills/:id', component: BillDetailComponent },
  { path: 'bills',     component: BillsComponent },
  { path: 'about',     component: AboutComponent},
  { path: 'meetings',     component: MeetingsComponent},
  { path: 'meetings/:id', component: MeetingDetailComponent },
  { path: '', component: IndexComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}