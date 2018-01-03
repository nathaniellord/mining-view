import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PoolsRoutingModule } from './pools-routing.module';
import { PoolsComponent } from './pools/pools.component';
import { PoolsService } from './pools.service';

@NgModule({
  imports: [
    CommonModule,
    PoolsRoutingModule,
    SharedModule
  ],
  declarations: [PoolsComponent],
  providers: [PoolsService]
})
export class PoolsModule { }
