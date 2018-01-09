import { Component, OnInit, OnDestroy } from '@angular/core';
import { TitleService } from '../../shared/title.service';
import { MatDialog } from '@angular/material';
import { MiningModalComponent } from '../mining-modal/mining-modal.component';
import { MiningService } from '../mining.service';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.scss']
})
export class MiningComponent implements OnInit, OnDestroy {

  miners;
  stats = {
    hashrate: 0,
    miners: 0,
    activeGPUs: 0
  };
  interval;

  constructor(private titleService: TitleService,
    public dialog: MatDialog,
    private miningService: MiningService) {
    titleService.setTitle('Mining');
  }

  ngOnInit() {
    this.getMiners();
    this.interval = setInterval(() => { this.getMiners(); }, 10000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getMiners() {
    this.miningService.getMiners().subscribe(miners => {
      this.miners = miners;
      this.processStats();
    });
  }

  processStats() {
    this.stats.hashrate = this.miners.map(value => parseFloat(value.hashrate)).reduce((previousValue, currentValue) => previousValue + currentValue);
    this.stats.miners = this.miners.length;
    this.stats.activeGPUs = this.miners.map(value => value.gpus.length).reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  addMiner() {
    let minerDialog = this.dialog.open(MiningModalComponent);
    minerDialog.afterClosed().subscribe(result => {
      console.log('Miner Dialog Closed');
    })
  }

}
