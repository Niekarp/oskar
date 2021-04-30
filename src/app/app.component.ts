import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { faSchool, faAddressCard, faBicycle, faDraftingCompass } from "@fortawesome/free-solid-svg-icons";

import { ExperienceComponent } from './components/experience/experience.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavItem } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(WelcomeComponent)    cmpWelcome: WelcomeComponent;
  @ViewChild(ExperienceComponent) cmpExperience: ExperienceComponent;
  @ViewChild(ProjectsComponent)   cmpProjects: ProjectsComponent;
  @ViewChild(HobbyComponent)      cmpHobby: HobbyComponent;

  public navbarConfig: Array<NavItem>;

  private pageSections: Array<HTMLElement>;
  private timelineOn = false;

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    // configure navbar and set breakpoints for sections changes

    this.pageSections = [
      this.cmpWelcome.elRef.nativeElement, 
      this.cmpExperience.elRef.nativeElement, 
      this.cmpProjects.elRef.nativeElement, 
      this.cmpHobby.elRef.nativeElement
    ];

    const contactOffsetTarget = () => 
      -1;
    const experienceOffsetTarget = () => 
      ((this.cmpWelcome.elRef.nativeElement  as HTMLElement).clientHeight / 2);
    const projectsOffsetTarget = () => 
      ((this.cmpProjects.elRef.nativeElement as HTMLElement).offsetTop) - (window.innerHeight / 2);
    const hobbyOffsetTarget = () => 
      (this.cmpHobby.elRef.nativeElement as HTMLElement).offsetTop 
      - ((this.cmpHobby.elRef.nativeElement as HTMLElement).clientHeight / 2);

    this.navbarConfig = [
      { 
        navName: "Kontakt",
        offsetTarget: contactOffsetTarget, 
        elementTarget: this.cmpWelcome.elRef.nativeElement,
        icon: faAddressCard 
      },
      { 
        navName: "Doświadzenie",
        offsetTarget: experienceOffsetTarget,
        elementTarget: this.cmpExperience.elRef.nativeElement,
        icon: faSchool
      },
      { 
        navName: "Projekty",
        offsetTarget: projectsOffsetTarget,
        elementTarget: this.cmpProjects.elRef.nativeElement,
        icon: faDraftingCompass 
      },
      { 
        navName: "Hobby", 
        offsetTarget: hobbyOffsetTarget,
        elementTarget: this.cmpHobby.elRef.nativeElement, 
        icon: faBicycle
      }
    ];

    // make first section active (not blurred)
    this.highlightBackground(this.navbarConfig[0]);

    this.cd.detectChanges();
  }

  public highlightBackground(navItem: NavItem) {
    this.pageSections.forEach(section => {
      section.classList.add("off");
      (section.firstChild! as HTMLElement).style.filter = "blur(1rem)"; 
    });

    navItem.elementTarget.classList.remove("off");
    (navItem.elementTarget!.firstChild as HTMLElement).style.filter = "blur(0rem)";
  }

  public startTimeline(navItem: NavItem) {
    // make timeline moving when doswiadczenie section is visited the first time
    if (navItem.navName === "Doświadzenie" && !this.timelineOn) {
      this.timelineOn = true;
      this.cmpExperience.startTimeline();
    }
  }
}
