import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['']);
  }

}
