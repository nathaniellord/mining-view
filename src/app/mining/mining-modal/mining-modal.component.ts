import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PoolsService } from '../../pools/pools.service';
import { MiningService } from '../mining.service';
import { GpusService } from '../../gpus/gpus.service';

@Component({
  selector: 'app-mining-modal',
  templateUrl: './mining-modal.component.html',
  styleUrls: ['./mining-modal.component.scss']
})
export class MiningModalComponent implements OnInit {

  pools = [];
  pool;
  gpus = [];
  selectedGPUs = [];

  constructor(public dialogRef: MatDialogRef<MiningModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private poolsService: PoolsService,
    private miningService: MiningService,
    private gpusService: GpusService) { }

  ngOnInit() {
    this.poolsService.getPools().subscribe(pools => this.pools = pools);
    this.gpusService.getGPUs().subscribe(gpus => { this.gpus = gpus; });
  }

  cancel() {
    this.dialogRef.close();
  }

  start() {
    console.log(this.pool);
    this.miningService.startMining(this.pool, this.selectedGPUs).subscribe(result => {
      this.dialogRef.close();
    });
  }

}
