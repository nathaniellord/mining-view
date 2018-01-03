import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../shared/title.service';

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.scss']
})
export class PoolsComponent implements OnInit {

  constructor(private titleService: TitleService) {
    titleService.setTitle('Pools');
  }

  ngOnInit() {
  }

}
