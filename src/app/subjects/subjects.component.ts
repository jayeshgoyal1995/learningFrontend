import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Subject from '../interfaces/subject'
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjectList: Subject[];
  constructor(private dataService: DataService) { 
    this.dataService.getSubjects().subscribe((list: Subject[])=>{
      this.subjectList = list;
    })
  }

  ngOnInit() {
  }

}
