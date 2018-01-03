import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { GpusRoutingModule } from './gpus-routing.module';
import { GpusComponent } from './gpus/gpus.component';
import { GpusService } from './gpus.service';

@NgModule({
  imports: [
    CommonModule,
    GpusRoutingModule,
    SharedModule
  ],
  declarations: [GpusComponent],
  providers: [GpusService]
})
export class GpusModule { }
