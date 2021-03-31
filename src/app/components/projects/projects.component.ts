import { Component, ElementRef, OnInit } from '@angular/core';
import { Project, Tech } from "./../project/project.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public elRef: ElementRef;

  public projects: Array<Project>;

  constructor(elRef: ElementRef) {
    this.elRef = elRef;

    // use capital letters for titles
    this.projects = [
      {
        imgSrc: "/assets/binpoll.png",
        title: "Binpoll",
        tech: Tech.Angular,
        desc: "Web application to conduct an acoustic scenes recognition poll. Participants are presented with binaural recordings and their task is to match them with acoustic scenes they represent.",
      },
      {
        imgSrc: "/assets/football.png",
        title: "Football",
        tech: Tech.React,
        desc: "Web application displaying football match statistics and predicting winning chances of each team.",
      },
      {
        imgSrc: "/assets/julik.png",
        title: "Julik",
        tech: Tech.Vue,
        desc: "Web application that is an online information center and a business card of a dog called Julik.",
      },
      {
        imgSrc: "/assets/ankiety.png",
        title: "Ankiety",
        tech: Tech.Angular,
        desc: "Web application concerning online surveys",
      },
      {
        imgSrc: "/assets/game.jpg",
        title: "Phaser game",
        tech: Tech.Phaser ,
        desc: "You live in an dry aquarium. One day someone bad decided to droop unscrewed hydrants into your home. The water level started to get higher and higher releasing deadly octopuses on its way.",
      },
      {
        imgSrc: "/assets/sops.jpg",
        title: "SOPS",
        tech: Tech.Angular,
        desc: "Web application for companies to register their products and generate QR codes for them.",
      },
      {
        imgSrc: "/assets/game.jpg",
        title: "Phaser game",
        tech: Tech.Phaser ,
        desc: "You live in an dry aquarium. One day someone bad decided to droop unscrewed hydrants into your home. The water level started to get higher and higher releasing deadly octopuses on its way.",
      },
      {
        imgSrc: "/assets/sops.jpg",
        title: "SOPS",
        tech: Tech.Angular,
        desc: "Web application for companies to register their products and generate QR codes for them.",
      },
    ];
  }

  ngOnInit(): void {
  }

}
