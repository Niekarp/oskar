import { Component, Input, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export enum Tech {
  Vue = "vue-logo.png",
  Angular = "angular-logo.png",
  React = "react-logo.png",
  Phaser = "phaser-logo.png"
};

export interface Project {
  imgSrc: Array<string>,
  imgIdx: number,
  title: string,
  tech: Tech,
  desc: string,
  try?: string
};

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input()
  public project: Project;

  public faGithub = faGithub;

  public nextImage() {
    this.project.imgIdx = (this.project.imgIdx + 1) % this.project.imgSrc.length;
  }

  public setImage(idx: number) {
    this.project.imgIdx = idx;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
