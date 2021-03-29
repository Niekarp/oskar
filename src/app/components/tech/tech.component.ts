import { Component, Input, OnInit } from '@angular/core';
import { faAngular, faVuejs, faWordpressSimple } from "@fortawesome/free-brands-svg-icons";
import { faEgg } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
  // public faAngular = faAngular;
  // public faVuejs = faVuejs;
  // public faWordpressSimple = faWordpressSimple;
  @Input()
  public timelineProgress: number;

  public faEgg = faEgg;

  constructor() { }

  ngOnInit(): void {
  }

}
