import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C0MainComponent } from './A-main/c0-main.component';

const routes: Routes = [
  {
    path: '',
    component: C0MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M3MaterialRoutingModule { }
