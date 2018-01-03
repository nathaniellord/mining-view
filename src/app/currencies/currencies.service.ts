import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

interface CurrenciesResponse {
  currencies: Currency[];
}
interface CurrencyStatsResponse {
  stats: CurrencyStat[];
}
export interface Currency {
  name: string;
  algorithm: string;
  symbol: string;
  stats?: CurrencyStat;
}
interface CurrencyStat {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  price_usd: string;
  price_btc: string;
  market_cap_usd: string;
  available_supply: string;
  total_supply: string;
  max_supply: string;
  percent_change_1h: string;
  percent_change_24h: string;
  percent_change_7d: string;
  last_updated: string;
}

@Injectable()
export class CurrenciesService {

  constructor(private http: HttpClient) { }

  public getCurrencies(): Observable<Currency[]> {
    return this.http.get('http://localhost:3050/currencies').map((response: CurrenciesResponse) => response.currencies);
  }

  public getStats(): Observable<CurrencyStat[]> {
    return this.http.get('http://localhost:3050/currencies/stats').map((response: CurrencyStatsResponse) => response.stats);
  }

  public getCurrenciesWithStats(): Observable<Currency[]> {
    return Observable.forkJoin(this.getCurrencies(), this.getStats()).map(([currencies, stats]) => {
      const item = currencies.map(value => {
        const stat = stats.filter(currency => currency.symbol === value.symbol);
        if (stat.length > 0) {
          value.stats = stat[0];
        } else {
          value.stats = this.generateBlankStat();
        }
        return value;
      })
      return item;
    });
  }


  private generateBlankStat(): CurrencyStat {
    return {
      id: '',
      name: '',
      symbol: '',
      rank: '',
      price_usd: '',
      price_btc: '',
      market_cap_usd: '',
      available_supply: '',
      total_supply: '',
      max_supply: '',
      percent_change_1h: '',
      percent_change_24h: '',
      percent_change_7d: '',
      last_updated: ''
    }
  }

}
