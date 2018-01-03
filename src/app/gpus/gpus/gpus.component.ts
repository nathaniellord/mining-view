import { Component, OnInit } from '@angular/core';
import { GpusService } from '../gpus.service';
import { TitleService } from '../../shared/title.service';

@Component({
  selector: 'app-gpus',
  templateUrl: './gpus.component.html',
  styleUrls: ['./gpus.component.scss']
})
export class GpusComponent implements OnInit {

  gpus = [];

  constructor(private gpusService: GpusService, titleService: TitleService) {
    titleService.setTitle('GPUs')
  }

  ngOnInit() {
    this.gpusService.getGPUs().subscribe(gpus => this.gpus = gpus);
  }

}
