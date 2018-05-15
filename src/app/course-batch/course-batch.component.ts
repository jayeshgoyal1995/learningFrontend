import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Batch from '../interfaces/batch'
import { DataService } from '../data.service';
@Component({
  selector: 'app-course-batch',
  templateUrl: './course-batch.component.html',
  styleUrls: ['./course-batch.component.css']
})
export class CourseBatchComponent implements OnInit {
  cid: number;
  cname: string;
  batchList: Batch[];
  constructor(private route: ActivatedRoute, private dataService: DataService) { 
    this.cid = this.route.snapshot.params['id']
    this.cname = this.route.snapshot.params['name']
    dataService.getCourseBatches(this.cid).subscribe((data: Batch[])=>{
      this.batchList = data
    })
  }

  ngOnInit() {
  }


}
