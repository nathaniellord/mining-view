import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CurrenciesRoutingModule } from './currencies-routing.module';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrenciesService } from './currencies.service';

@NgModule({
  imports: [
    CommonModule,
    CurrenciesRoutingModule,
    SharedModule
  ],
  declarations: [CurrenciesComponent],
  providers: [CurrenciesService]
})
export class CurrenciesModule { }
