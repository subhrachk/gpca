import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {path : '',component:HomeComponent,children:[
  {path : 'events',component:EventsComponent},
  {path : 'about',component:AboutComponent},
  {path : 'team',component:TeamComponent},
  {path : 'contact',component:ContactsComponent},
  {path : '**',component:HomeComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
