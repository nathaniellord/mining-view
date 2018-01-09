import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PoolsService } from '../../pools/pools.service';

@Component({
  selector: 'app-mining-modal',
  templateUrl: './mining-modal.component.html',
  styleUrls: ['./mining-modal.component.scss']
})
export class MiningModalComponent implements OnInit {

  pools = [];

  constructor(public dialogRef: MatDialogRef<MiningModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private poolsService: PoolsService) { }

  ngOnInit() {
    this.poolsService.getPools().subscribe(pools => this.pools = pools);
  }

  cancel() {
    this.dialogRef.close();
  }

  start() {

  }

}
