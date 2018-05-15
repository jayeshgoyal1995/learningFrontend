import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { 
    
  }

  ngOnInit() {
  }
  submitStudent(studentName){
    this.dataService.addStudent(studentName).subscribe((resp)=>{
      alert("New student added successfully");
      this.router.navigate(['students']);
    })  
  }
}
