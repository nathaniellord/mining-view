import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoolsComponent } from './pools/pools.component';

const routes: Routes = [
  { path: 'pools', component: PoolsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoolsRoutingModule { }
