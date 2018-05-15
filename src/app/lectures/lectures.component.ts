import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ActivatedRoute} from '@angular/router'
import Lecture from '../interfaces/lecture'
@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {
  lectureList: Lecture[];
  bid: number;
  cid: number;
  bname: string;
  constructor(private dataService: DataService, private route: ActivatedRoute) { 
    this.bid = this.route.snapshot.params['bid'];
    this.bname = this.route.snapshot.params['bname'];
    this.cid = this.route.snapshot.params['cid'];
    this.dataService.getLectures(this.cid, this.bid).subscribe((list: Lecture[])=>{
      this.lectureList = list
    })
  }

  ngOnInit() {
  }

}
