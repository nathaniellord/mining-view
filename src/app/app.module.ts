import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { GpusModule } from './gpus/gpus.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { PoolsModule } from './pools/pools.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MiningModule } from './mining/mining.module';
import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    GpusModule,
    DashboardModule,
    CurrenciesModule,
    PoolsModule,
    MiningModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
