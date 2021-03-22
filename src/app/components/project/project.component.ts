import { Component, Input, OnInit } from '@angular/core';

export enum Tech {
  Vue = "vue-logo.png",
  Angular = "angular-logo.png",
  React = "react-logo.png",
  Phaser = "phaser-logo.png"
};

export interface Project {
  imgSrc: string,
  title: string,
  tech: Tech,
  desc: string
};

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input()
  public project: Project;

  constructor() {
  }

  ngOnInit(): void {
  }

}
