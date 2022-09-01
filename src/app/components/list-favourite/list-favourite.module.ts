import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListfavouriteComponent } from './list-favourite.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: ListfavouriteComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ListfavouriteModule { }
