import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Batch from '../interfaces/batch'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  batchList: Batch[]
  constructor(private dataService: DataService) { 
    dataService.getBatches().subscribe((data: Batch[])=>{
      this.batchList = data;
    })
  }
  ngOnInit() {
  }

}
