import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute} from '@angular/router';
import Student from '../interfaces/student'
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: Student;
  sid: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { 
    this.sid = this.route.snapshot.params['id'];
    this.dataService.getStudent(this.sid).subscribe((resp: Student)=>{
      this.student = resp;
    })
  }

  ngOnInit() {
  }

}
