import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Course from '../interfaces/course'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseList: Course[]
  constructor(private dataService: DataService) { 
      dataService.getCourses().subscribe((data: Course[])=>{
      this.courseList = data;
    })
  }

  ngOnInit() {
  }

}
