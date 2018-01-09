import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface PoolsResponse {
  pools: Object[];
}

@Injectable()
export class PoolsService {

  constructor(private http: HttpClient) { }

  public getPools(): Observable<Object[]> {
    return this.http.get('http://localhost:3050/pools').map((response: PoolsResponse) => response.pools);
  }

}
