import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface GPUsResponse {
  gpus: Object[];
}

@Injectable()
export class GpusService {

  constructor(private http: HttpClient) { }

  public getGPUs(): Observable<Object[]> {
    return this.http.get('http://localhost:3050/gpus').map((response: GPUsResponse) => response.gpus);
  }

}
