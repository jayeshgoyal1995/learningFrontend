import { Component, OnInit } from '@angular/core';
import Batch from '../interfaces/batch'
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css']
})
export class EnrollStudentComponent implements OnInit {
  sid: number;
  sname: string;
  batchList: Batch[]
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { 
    this.sid = this.route.snapshot.params['id'];
    this.sname = this.route.snapshot.params['name'];
    this.dataService.getBatches().subscribe((list: Batch[])=>{
      this.batchList = list
    })
  }

  ngOnInit() {
  }
  enrollStudent(batchId){
    this.dataService.enrollStudent(this.sid, batchId).subscribe((resp)=>{
      alert("Student enrolled");
      this.router.navigate(['students']);
    })
  }
}
