import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../shared/title.service';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.scss']
})
export class MiningComponent implements OnInit {

  constructor(private titleService: TitleService) {
    titleService.setTitle('Mining');
  }

  ngOnInit() {
  }

}
