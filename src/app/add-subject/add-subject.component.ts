import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  submitSubject(subjectName: string){
    this.dataService.addSubject(subjectName).subscribe((resp)=>{
      alert("Successfully added Subject: "+ subjectName)
      this.router.navigate(['subjects'])
    })
  }

}
