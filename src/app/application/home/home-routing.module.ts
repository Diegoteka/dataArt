import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children: [
      { 
        path: 'character',
        component:CharacterComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
