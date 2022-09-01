import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PkmTopbarComponent } from './pkm-topbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PkmTopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PkmTopbarComponent]
})
export class PkmTopBarModule { }
