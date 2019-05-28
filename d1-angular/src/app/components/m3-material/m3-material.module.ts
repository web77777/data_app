import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//routing
import { M3MaterialRoutingModule } from './m3-material-routing.module';
//components
import { C0MainComponent } from './A-main/c0-main.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [C0MainComponent],
  imports: [
    CommonModule,
    M3MaterialRoutingModule,
    MaterialModule
  ]
})
export class M3MaterialModule { }

