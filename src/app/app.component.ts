import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ExperienceComponent } from './components/experience/experience.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { ProjectsComponent } from './components/projects/projects.component';

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
  
  public navbarConfig: Array<{ navName: string, offsetTarget: number, elementTarget: HTMLElement }>;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    const experienceOffsetTarget = ((this.cmpWelcome.elRef.nativeElement as HTMLElement).clientHeight / 2);
    const projectsOffsetTarget   = ((this.cmpExperience.elRef.nativeElement as HTMLElement).offsetTop) +  
      ((this.cmpExperience.elRef.nativeElement as HTMLElement).clientHeight / 2);
    const hobbyOffsetTarget = (this.cmpHobby.elRef.nativeElement as HTMLElement).offsetTop - 
      ((this.cmpHobby.elRef.nativeElement as HTMLElement).clientHeight / 2);

    this.navbarConfig = [];
    this.navbarConfig.push(
      { navName: "Oskar",        offsetTarget: 0, elementTarget: this.cmpWelcome.elRef.nativeElement },
      { navName: "Doświadzenie", offsetTarget: experienceOffsetTarget, elementTarget: this.cmpExperience.elRef.nativeElement },
      { navName: "Projekty",     offsetTarget: projectsOffsetTarget, elementTarget: this.cmpProjects.elRef.nativeElement },
      { navName: "Hobby",        offsetTarget: hobbyOffsetTarget, elementTarget: this.cmpHobby.elRef.nativeElement }
    );

    this.cd.detectChanges();
  }
}
