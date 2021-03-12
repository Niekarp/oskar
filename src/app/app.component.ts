import { Component, ElementRef, ViewChild } from '@angular/core';
import { ExperienceComponent } from './components/experience/experience.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { ProjectComponent } from './components/project/project.component';

import { WelcomeComponent } from './components/welcome/welcome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(WelcomeComponent) cmpWelcome!: WelcomeComponent;
  @ViewChild(ExperienceComponent) cmpExperience!: ExperienceComponent;
  @ViewChild(ProjectComponent) cmpProjects!: ProjectComponent;
  @ViewChild(HobbyComponent) cmpHobby!: HobbyComponent;

  public navbarConfig: Array<{ navName: string, offsetTarget: number }> = [];

  ngAfterViewInit() {
    const experienceOffsetTarget = ((this.cmpWelcome.elRef.nativeElement as HTMLElement).clientHeight / 2);
    const projectsOffsetTarget = ((this.cmpExperience.elRef.nativeElement as HTMLElement).offsetTop) +  
      ((this.cmpExperience.elRef.nativeElement as HTMLElement).clientHeight / 2);
    const hobbyOffsetTarget =  (this.cmpHobby.elRef.nativeElement as HTMLElement).offsetTop - 
      ((this.cmpHobby.elRef.nativeElement as HTMLElement).clientHeight / 2);

    this.navbarConfig.push(
      { navName: "Oskar", offsetTarget: 0 },
      { navName: "Doświadzenie", offsetTarget: experienceOffsetTarget },
      { navName: "Projekty", offsetTarget: projectsOffsetTarget },
      { navName: "Hobby", offsetTarget: hobbyOffsetTarget }
    );
  }
}
