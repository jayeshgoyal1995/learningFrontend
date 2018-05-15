import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router'
import Course from '../interfaces/course'

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }
  submitCourse(courseName) {
    if (!courseName) {
      alert("Course Name cannot be left blank");
    } else {
      this.dataService.addCourse(courseName)
        .subscribe((resp: Course) => {
          alert("Course added successfully");
          this.router.navigate(['courses']);
        })
    }
  }

}
