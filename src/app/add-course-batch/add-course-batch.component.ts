import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-add-course-batch',
  templateUrl: './add-course-batch.component.html',
  styleUrls: ['./add-course-batch.component.css']
})
export class AddCourseBatchComponent implements OnInit {
  cid: number;
  cname: string;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { 
    this.cid = this.route.snapshot.params['id']
    this.cname = this.route.snapshot.params['name']
  }
  
  ngOnInit() {
  }
  submitBatch(batchName: string){
    this.dataService.addCourseBatch(this.cid, batchName).subscribe((resp)=>{
      alert("New batch added to course");
      this.router.navigate(['courses',this.cid,this.cname,'batches']);
    })
  }
}
