import { Component, OnInit } from '@angular/core';
import Subject from '../interfaces/subject'
import {Router} from '@angular/router'
import { DataService } from '../data.service';
@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  subjectList: Subject[]
  constructor(private dataService: DataService, private router: Router) { 
    this.dataService.getSubjects().subscribe((list: Subject[])=>{
      this.subjectList = list
    })
  }

  ngOnInit() {
  }
  submitTeacher(teacherName: string, subjectId: number){
    this.dataService.addTeacher(teacherName, subjectId).subscribe((resp)=>{
      alert("New Teacher added successfully");
      this.router.navigate(['teachers']);
    })
  }
}
