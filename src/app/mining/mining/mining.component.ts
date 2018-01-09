import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../shared/title.service';
import { MatDialog } from '@angular/material';
import { MiningModalComponent } from '../mining-modal/mining-modal.component';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.scss']
})
export class MiningComponent implements OnInit {

  constructor(private titleService: TitleService, public dialog: MatDialog) {
    titleService.setTitle('Mining');
  }

  ngOnInit() {
  }

  addMiner() {
    let minerDialog = this.dialog.open(MiningModalComponent);
    minerDialog.afterClosed().subscribe(result => {
      console.log('Miner Dialog Closed');
    })
  }

}
