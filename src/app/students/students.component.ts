import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Student from '../interfaces/student'
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentList: Student[] 
  constructor(private dataService: DataService) { 
    this.dataService.getStudents().subscribe((list: Student[])=>{
      this.studentList = list;
    })
  }

  ngOnInit() {
  }

}
