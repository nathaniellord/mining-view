import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MiningService {

  constructor(private http: HttpClient) { }

  getMiners() {
    return this.http.get('http://localhost:3050/mining');
  }

  startMining(poolid, gpus): Observable<Object> {
    console.log('Starting mining!!');
    return this.http.post('http://localhost:3050/mining/miner', { poolid: poolid, gpus: gpus });
  }

  stopMining(miner) {
    return this.http.delete(`http://localhost:3050/mining/miner/${miner}`);
  }

}
