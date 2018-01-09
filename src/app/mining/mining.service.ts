import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface MinerResponse {
  miners: Miner[]
}
interface Miner {
  name: string;
  difficulty: number;
  hashrate: string;
  lastaccepted: string;
  pool: string;
  gpus: string[];
  rejected: number;
  threads: string;
}

@Injectable()
export class MiningService {

  constructor(private http: HttpClient) { }

  getMiners(): Observable<Miner[]> {
    return this.http.get('http://localhost:3050/mining').map((response: MinerResponse) => response.miners);
  }

  startMining(poolid, gpus): Observable<Object> {
    return this.http.post('http://localhost:3050/mining/miner', { poolid: poolid, gpus: gpus });
  }

  stopMining(miner) {
    return this.http.delete(`http://localhost:3050/mining/miner/${miner}`);
  }

}
