import { SharedService } from './../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private shared: SharedService) { }

  ngOnInit() {
  }

}
