import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GpusComponent } from './gpus/gpus.component';

const routes: Routes = [
  { path: 'gpus', component: GpusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpusRoutingModule { }
