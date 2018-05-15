import { Component, OnInit } from '@angular/core';
import Subject from '../interfaces/subject'
import {ActivatedRoute, Router} from '@angular/router'
import { DataService } from '../data.service';
@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.component.html',
  styleUrls: ['./add-lecture.component.css']
})
export class AddLectureComponent implements OnInit {
  subjectList: Subject[]
  bid: number;
  cid: number;
  bname: string;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.bid = this.route.snapshot.params['bid'];
    this.bname = this.route.snapshot.params['bname'];
    this.cid = this.route.snapshot.params['cid'];
    this.dataService.getSubjects().subscribe((list: Subject[])=>{
      this.subjectList = list
    })
  }

  ngOnInit() {
  }
  submitLecture(lectureName, subjectId){
    this.dataService.addLecture(this.bid, this.cid, subjectId, lectureName).subscribe((resp)=>{
      alert("New lecture added to Batch");
      this.router.navigate(['lectures', this.cid,this.bid, this.bname]);
    })
  }
}
