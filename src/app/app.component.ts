import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ExperienceComponent } from './components/experience/experience.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavItem } from "./components/navbar/navbar.component";
import { faPhone, faSchool, faBook, faNotEqual, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { WelcomeComponent } from './components/welcome/welcome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(WelcomeComponent) cmpWelcome!: WelcomeComponent;
  @ViewChild(ExperienceComponent) cmpExperience!: ExperienceComponent;
  @ViewChild(ProjectsComponent) cmpProjects!: ProjectsComponent;
  @ViewChild(HobbyComponent) cmpHobby!: HobbyComponent;

  private pageSections: Array<HTMLElement>;
  private timelineOn = false;
  
  public navbarConfig: Array<NavItem>;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.pageSections = [this.cmpWelcome.elRef.nativeElement, this.cmpExperience.elRef.nativeElement, this.cmpProjects.elRef.nativeElement, this.cmpHobby.elRef.nativeElement];

    const experienceOffsetTarget = () => ((this.cmpWelcome.elRef.nativeElement as HTMLElement).clientHeight / 2);
    const projectsOffsetTarget   = () => ((this.cmpProjects.elRef.nativeElement as HTMLElement).offsetTop) 
      - (window.innerHeight / 2);
    // + ((this.cmpExperience.elRef.nativeElement as HTMLElement).clientHeight / 2);
    const hobbyOffsetTarget = () => (this.cmpHobby.elRef.nativeElement as HTMLElement).offsetTop - 
      ((this.cmpHobby.elRef.nativeElement as HTMLElement).clientHeight / 2);

    this.navbarConfig = [];
    this.navbarConfig.push(
      { navName: "Kontakt",      offsetTarget: () => 0, elementTarget: this.cmpWelcome.elRef.nativeElement, icon: faPhone },
      { navName: "Doświadzenie", offsetTarget: experienceOffsetTarget, elementTarget: this.cmpExperience.elRef.nativeElement, icon: faSchool },
      { navName: "Projekty",     offsetTarget: projectsOffsetTarget, elementTarget: this.cmpProjects.elRef.nativeElement, icon: faBook },
      { navName: "Hobby",        offsetTarget: hobbyOffsetTarget, elementTarget: this.cmpHobby.elRef.nativeElement, icon: faNotEqual }
    );

    this.highlightBackground(this.navbarConfig[0]);

    this.cd.detectChanges();
  }

  public highlightBackground(navItem: NavItem) {
    this.pageSections.forEach(section => {
      // section.style.backgroundColor = "rgb(23, 54, 81)";
      section.classList.add("off");
      (section.firstChild! as HTMLElement).style.filter = "blur(1rem)"; 
    });

    // navItem.elementTarget.style.backgroundColor =  "rgb(72, 153, 223)";
    navItem.elementTarget!.classList.remove("off");
    (navItem.elementTarget!.firstChild as HTMLElement).style.filter = "blur(0rem)";
  }

  public startTimeline(navItem: NavItem) {
    if (navItem.navName === "Doświadzenie" && !this.timelineOn) {
      this.timelineOn = true;
      this.cmpExperience.startTimeline();
    }
  }
}
