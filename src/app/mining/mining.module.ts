import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MiningRoutingModule } from './mining-routing.module';
import { MiningComponent } from './mining/mining.component';
import { MiningService } from './mining.service';
import { MiningModalComponent } from './mining-modal/mining-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MiningRoutingModule,
    SharedModule
  ],
  declarations: [MiningComponent, MiningModalComponent],
  providers: [MiningService],
  entryComponents: [MiningModalComponent]
})
export class MiningModule { }
