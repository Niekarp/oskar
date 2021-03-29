import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild("background")
  public backgroundRef: ElementRef;
  // public elRef: ElementRef;

  private rgb = [70, 10, 50];
  private colorDirection = [true, true, true];

  public faGithub = faGithub;
  public faEnvelope = faEnvelope;
  public faLinkedin = faLinkedin;
  public faChevronDown = faChevronDown;

  constructor(public elRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // fuj
    // setTimeout(() => {
    //   (this.backgroundRef.nativeElement as HTMLElement).classList.add("welcome__background--active");
    // }, 1000);
  }

  public navigateToSectionBottom() {
    (this.elRef.nativeElement as HTMLElement).nextElementSibling!.scrollIntoView({block: "start", behavior: "smooth"});
  }
}
