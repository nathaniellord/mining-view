import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../shared/title.service';
import { DataSource } from '@angular/cdk/collections';
import { PoolsService } from '../pools.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.scss']
})
export class PoolsComponent implements OnInit {

  displayedColumns = ['currency', 'url', 'user'];
  dataSource = new PoolsDataSource(this.poolsService);;

  constructor(private poolsService: PoolsService, private titleService: TitleService) {
    titleService.setTitle('Pools');
  }

  ngOnInit() {
  }

}

export class PoolsDataSource extends DataSource<any> {
  constructor(private poolsService: PoolsService) {
    super();
  }

  public connect(): Observable<Object[]> {
    return this.poolsService.getPools();
  }

  public disconnect() { }
}
