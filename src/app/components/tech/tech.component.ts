import { Component, Input, OnInit } from '@angular/core';
import { faEgg } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
  @Input()
  public timelineProgress: number;

  public faEgg = faEgg;

  constructor() { }

  ngOnInit(): void {
  }

}
