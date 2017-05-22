import { Component, OnInit } from '@angular/core';
import { ScreenService} from './../services/screen.service';

@Component({
  selector: 'spafx-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private screenService: ScreenService) { }

  ngOnInit() {
  }

}
