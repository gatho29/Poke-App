import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PkmTopbarComponent } from './pkm-topbar.component';



@NgModule({
  declarations: [
    PkmTopbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PkmTopbarComponent]
})
export class PkmTopBarModule { }
