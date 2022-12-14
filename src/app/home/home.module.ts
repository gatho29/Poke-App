import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';
import { PkmButtonModule, PkmTopBarModule } from 'projects/ngx-nell-library/src/public-api';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    SearchPipe,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ComponentsModule,
    PkmTopBarModule,
    PkmButtonModule,
    InfiniteScrollModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class HomeModule { }
