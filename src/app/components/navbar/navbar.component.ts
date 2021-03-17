import { Component, HostListener, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

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
  public config: Array<{ navName: string, offsetTarget: number, elementTarget: HTMLElement }>;

  public navbarTitle = "Oskar";
  public pendingNavbarTitle = "";
  public navbarTitleBlurred = false;
  public hamburgerClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  private updateOnScroll() {
    const currentScroll = window.pageYOffset;
    
    this.config.slice().reverse().every(navBreakpoint => { 
      if (currentScroll > navBreakpoint.offsetTarget) {
        this.pendingNavbarTitle = navBreakpoint.navName;
        return false;
      }
      return true;
    });

    if (this.pendingNavbarTitle !== this.navbarTitle) {
      this.navbarTitleBlurred = true;
    }
  }

  public onHamburgerClick() {
    this.hamburgerClicked = !this.hamburgerClicked;
  }

  public changeDisplayedTitle(event: AnimationEvent) {
    if (event.toState === "blur") {
      this.navbarTitle = this.pendingNavbarTitle;
      this.navbarTitleBlurred = false;
    }
  }

  public navigateTo(target: HTMLElement) {
    this.hamburgerClicked = false;
    target.scrollIntoView({ behavior: "smooth" });
  }
}

