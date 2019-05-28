import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//routing
import { M1AngularRoutingModule } from './m1-angular-routing.module';
//components
import { C0MainComponent } from './c0-main/c0-main.component';


@NgModule({
  declarations: [C0MainComponent],
  imports: [
    CommonModule,
    M1AngularRoutingModule
  ]
})
export class M1AngularModule { }
