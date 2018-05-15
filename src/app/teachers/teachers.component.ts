import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Teacher from '../interfaces/teacher'
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teacherList: Teacher[];
  constructor(private dataService: DataService) { 
    this.dataService.getTeachers().subscribe((list: Teacher[])=>{
      this.teacherList = list;
    })
  }

  ngOnInit() {
  }

}
