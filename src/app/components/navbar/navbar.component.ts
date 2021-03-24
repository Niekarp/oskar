import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

export interface NavItem {
  navName: string,
  offsetTarget: () => number,
  elementTarget: HTMLElement
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('blurUnblur', [
      state('blur', style({ filter: 'blur(2rem)' })),
      state('unblur', style({ filter: 'blur(0rem)' })),
      transition('blur <=> unblur', [ animate('0.3s') ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  @Input()
  public config: Array<NavItem>;

  @Output()
  public targetReached = new EventEmitter<NavItem>();

  @ViewChild("hamburger")
  public hamburgerRef: ElementRef;

  public navbarTitle = ":)";
  public pendingNavbarTitle = "";
  public navbarTitleBlurred = false;
  public hamburgerClicked = false;
  public currentSection: NavItem;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  private updateOnScroll() {
    this.updateCurrentSection();

    const currentScroll = window.pageYOffset;
    
    this.config.slice().reverse().every(navBreakpoint => { 
      if (currentScroll > navBreakpoint.offsetTarget()) {
        this.pendingNavbarTitle = navBreakpoint.navName;
        return false;
      }
      return true;
    });

    if (this.pendingNavbarTitle !== this.navbarTitle) {
      this.targetReached.emit(this.config.find(item => item.navName === this.pendingNavbarTitle));
      this.navbarTitleBlurred = true;
    }
  }

  public onHamburgerClick() {
    if (!this.hamburgerClicked) {
      window.document.documentElement.style.overflowY = "hidden";
      this.updateCurrentSection();
      (this.currentSection.elementTarget.firstChild as HTMLElement).style.filter = "blur(2rem)"
    } else {
      window.document.documentElement.style.overflowY = "unset";
      (this.currentSection.elementTarget.firstChild as HTMLElement).style.filter = "unset"
    }

    this.hamburgerClicked = !this.hamburgerClicked;
  }

  public changeDisplayedTitle(event: AnimationEvent) {
    if (event.toState === "blur") {
      this.navbarTitle = this.pendingNavbarTitle;
      this.navbarTitleBlurred = false;
    }
  }

  public navigateTo(target: HTMLElement) {
    if (window.getComputedStyle((this.hamburgerRef.nativeElement as HTMLElement)).display !== "none") {
      this.onHamburgerClick(); 
    }

    target.scrollIntoView({ behavior: "smooth" });
    this.targetReached.emit(this.config.find(item => item.navName === this.navbarTitle));
  }

  private updateCurrentSection() {
    const currentScroll = window.pageYOffset;

    this.currentSection = this.config[0];
    this.config.slice().reverse().every(navBreakpoint => { 
      if (currentScroll > navBreakpoint.offsetTarget()) {
        this.currentSection = navBreakpoint;
        return false;
      }
      return true;
    });
  }
}
