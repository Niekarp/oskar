import { Component, Input, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faExpand, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export enum Tech {
  Vue = "vue-logo.png",
  Angular = "angular-logo.png",
  React = "react-logo.png",
  Phaser = "phaser-logo.png",
  Wordpress = "wordpress-logo.svg"
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
  public faChevronDown = faChevronDown;
  public faExpand = faExpand;
  public faTimesCircle = faTimesCircle;

  public fullScreenOn = false;
  private resizeEventHandler: () => void;

  public nextImage() {
    this.project.imgIdx = (this.project.imgIdx + 1) % this.project.imgSrc.length;
  }
  
  public prevImage() {
    this.project.imgIdx = ((this.project.imgIdx - 1) + this.project.imgSrc.length) % this.project.imgSrc.length;
  }

  public setImage(idx: number) {
    this.project.imgIdx = idx;
  }

  public toggleFullscreen() {
    if (!this.fullScreenOn) {
      this.enterFullScreen();
    } else {
      this.exitFullscreen();
    }
  }

  public checkAndExitIfFullscreen(event: MouseEvent) {
    if ((event.target as HTMLElement).className === "project__img-background") {
      this.exitFullscreen();
    }
  }

  private enterFullScreen() {
    (document.getElementsByClassName("projects").item(0) as HTMLElement).classList.add("fullscreen");
    window.document.documentElement.style.overflow = "hidden";
    this.fullScreenOn = !this.fullScreenOn;

    this.resizeEventHandler = () => { this.exitFullScreenIfMobile(); };
    window.addEventListener("resize", this.resizeEventHandler);
  }

  private exitFullscreen() {
    this.fullScreenOn = false;
    (document.getElementsByClassName("projects").item(0) as HTMLElement).classList.remove("fullscreen");
    window.document.documentElement.style.overflow = "unset";
    window.removeEventListener("resize", this.resizeEventHandler);
  }

  private exitFullScreenIfMobile() {
    if (window.innerWidth < 840) {
      this.exitFullscreen();
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
