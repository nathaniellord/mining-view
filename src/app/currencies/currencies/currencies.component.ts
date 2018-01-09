import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Currency } from '../currencies.service';
import { TitleService } from '../../shared/title.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  displayedColumns = ['symbol', 'name', 'algorithm', 'priceUsd', 'priceBtc', 'marketCap', 'change'];
  dataSource: CurrenciesDataSource;

  constructor(private currenciesService: CurrenciesService, private titleService: TitleService) {
    this.dataSource = new CurrenciesDataSource(currenciesService);
    titleService.setTitle('Currencies');
  }

  ngOnInit() {
  }

}

export class CurrenciesDataSource extends DataSource<any> {
  constructor(private currenciesService: CurrenciesService) {
    super();
  }

  public connect(): Observable<Currency[]> {
    return this.currenciesService.getCurrenciesWithStats();
  }

  public disconnect() { }
}
