import { Routes } from '@angular/router';
import { HomeComponent } from './home';
//import { AboutComponent } from './about';
import { AboutDataComponent }         from './about-data.component';
import { NoContentComponent } from './no-content';
import { IndexComponent}  from './index.component';
import { BillsComponent }      from './bills.component';
import { BillDetailComponent }  from './bill-detail.component';
import { MeetingsComponent }  from './meetings.component';
import {MeetingDetailComponent} from './meeting-detail.component';
import { MinisterDetailComponent }  from './minister-detail.component';
import { MinisterComponent }   from './minister.component';


import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'bills/:id', component: BillDetailComponent },
  { path: 'bills',     component: BillsComponent },
  { path: 'meetings',     component: MeetingsComponent},
  { path: 'meetings/:id', component: MeetingDetailComponent },
  { path: 'minister',  component: MinisterComponent },
  { path: 'minister/:id',  component: MinisterDetailComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutDataComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
