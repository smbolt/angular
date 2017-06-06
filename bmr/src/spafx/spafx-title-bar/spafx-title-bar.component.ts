import { Component, OnInit } from '@angular/core';
import { ScreenService} from './../services/screen.service';

@Component({
  selector: 'spafx-title-bar',
  templateUrl: './spafx-title-bar.component.html',
  styleUrls: ['./spafx-title-bar.component.css']
})
export class SpaFxTitleBarComponent implements OnInit {

  constructor(private screenService: ScreenService) { }

  ngOnInit() {
  }

}
