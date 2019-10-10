import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvionListComponent } from './avion-list/avion-list.component';
import { AvionAddComponent } from './avion-add/avion-add.component';


const routes: Routes = [
  {
    path: 'avionlist',
    component:AvionListComponent
  },
  {
    path:'avionadd',
    component:AvionAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
