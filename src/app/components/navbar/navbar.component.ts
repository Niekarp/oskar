import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface NavItem {
  navName: string,
  offsetTarget: () => number,
  elementTarget: HTMLElement,
  icon: IconDefinition,
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('blurUnblur', [
      state('blur',   style({ filter: 'blur(2rem)' })),
      state('unblur', style({ filter: 'unset' })),
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

  public navbarTitle = "Kontakt";
  public pendingNavbarTitle = "";
  public navbarTitleBlurred = false;

  public hamburgerClicked = false;
  public currentSection: NavItem;
  
  public navbarBackgroundShown = false;

  private projectsElement: HTMLElement;

  constructor(public cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  private ngAfterViewInit() {
    this.projectsElement = (document.getElementsByClassName("projects").item(0) as HTMLElement);
    this.updateCurrentSection();
    this.cd.detectChanges();
  }

  @HostListener('window:scroll', ['$event'])
  private updateOnScroll() {
    if (this.projectsElement.classList.contains("fullscreen")) {
      return;
    }
    
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

    if (!this.navbarBackgroundShown) {
      if (currentScroll > this.config[1].offsetTarget() && window.innerWidth < 768) {
        this.navbarBackgroundShown = true;
      }
    }
  }

  public onHamburgerClick() {
    if (!this.hamburgerClicked) {
      window.document.documentElement.style.overflowY = "hidden";
    } else {
      window.document.documentElement.style.overflowY = "unset";
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
      if (currentScroll >= navBreakpoint.offsetTarget()) {
        this.currentSection = navBreakpoint;
        this.targetReached.emit(this.currentSection);
        return false;
      }
      return true;
    });
  }
}
