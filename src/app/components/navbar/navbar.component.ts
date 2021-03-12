import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() config: Array<{ navName: string, offsetTarget: number }> = [];

  public navbarTitle = "Oskar";

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  private updateOnScroll() {
    const currentScroll = window.pageYOffset;
    
    this.config.slice().reverse().every(navBreakpoint => { 
      if (currentScroll > navBreakpoint.offsetTarget) {
        this.navbarTitle = navBreakpoint.navName;
        return false;
      }
      return true;
    });
  }
}
