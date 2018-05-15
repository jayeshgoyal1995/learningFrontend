import { Component, OnInit } from '@angular/core';
import Batch from '../interfaces/batch'
import { DataService } from '../data.service';
@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {

  batchList: Batch[]
  constructor(private dataService: DataService) { 
    dataService.getBatches().subscribe((data: Batch[])=>{
      this.batchList = data;
    })
  }
  ngOnInit() {
  }

}
