import { CabecalhoComponent } from './cabecalho.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CabecalhoComponent],
  imports: [
    CommonModule
  ],
  exports:[CabecalhoComponent]
})
export class CabecalhoModule { }
