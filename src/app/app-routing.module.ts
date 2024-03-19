import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {path : '',component:HomeComponent},
  {path : 'events',component:EventsComponent},
  {path : 'contact',component:ContactsComponent},
  {path : '**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
