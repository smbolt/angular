import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from './../services/framework-config.service';

@Component({
  selector: 'spafx-top-bar',
  templateUrl: './spafx-top-bar.component.html',
  styleUrls: ['./spafx-top-bar.component.css']
})
export class SpafxTopBarComponent implements OnInit {

  constructor(private frameworkConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

}
