import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiningComponent } from './mining/mining.component';

const routes: Routes = [
  { path: 'mining', component: MiningComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiningRoutingModule { }
