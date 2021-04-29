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
        imgSrc: [
          "./assets/binpoll-1.png",
          "./assets/binpoll-2.png",
          "./assets/binpoll-3.png",
          "./assets/binpoll-4.png",
          "./assets/binpoll-5.png",
          "./assets/binpoll-6.png",
          "./assets/binpoll-7.png",
          "./assets/binpoll-8.png",
          "./assets/binpoll-9.png",
          "./assets/binpoll-10.png",
       ],
        imgIdx: 0,
        title: "BINPOLL",
        tech: Tech.Angular,
        desc: 
        `Internetowy test klasyfikacji scen akustycznych. 
        Uczestnicy podejmują decyzje sluchajac nagran binauralnych.
        Wykorzystany do zebrania probek w miedzynarodowym badaniu.`,
        try: "google.pl"
      },
      {
        title: "Oskar",
        imgSrc: [
          "./assets/oskar-1.png",
          "./assets/oskar-2.png",
        ],
        imgIdx: 0,
        tech: Tech.Angular,
        desc: "Strona na ktorej wlasnie sie znajdujesz. Moja internetowa wizytowka.",
      },
      {
        imgIdx: 0,
        title: "Julik",
        imgSrc: [
          "./assets/julik-1.png",
          "./assets/julik-2.png",
          "./assets/julik-3.png",
          "./assets/julik-4.png",
          "./assets/julik-5.png",
          "./assets/julik-6.png",
          "./assets/julik-7.png",
          "./assets/julik-8.png",
          "./assets/julik-9.png",
          "./assets/julik-10.png",
        ],
        tech: Tech.Vue,
        desc: 
        `Strona internetowa o psie Juliku. Zawiera ukryty katalog utworów muzycznych.`,
        try: "google.pl"
      },
      {
        title: "Ankiety",
        imgSrc: [
          "./assets/ankiety-1.png",
          "./assets/ankiety-2.png",
          "./assets/ankiety-3.png",
          "./assets/ankiety-4.png",
          "./assets/ankiety-5.png",
          "./assets/ankiety-6.png",
          "./assets/ankiety-7.png",
        ],
        imgIdx: 0,
        tech: Tech.Angular,
        desc:
        `Platforma do przygotowywania, wypelniania i wyszukiwania ankiet internetowych. 
        Zawiera kreator ankiety obslugujacy kilka rodzajow pytan, w tym pytania warunkowe.`,
      },
      {
        title: "SOPS",
        imgSrc: [
          "./assets/sops-1.jpg",
          "./assets/sops-2.jpg",
          "./assets/sops-3.jpg",
          "./assets/sops-4.jpg",
          "./assets/sops-5.jpg",
          "./assets/sops-6.jpg",
          "./assets/sops-7.jpg",
        ],
        imgIdx: 0,
        tech: Tech.Angular,
        desc: 
        `Platforma do rejestracji i generowania kodow QR produktow sporzywczych. 
        Pelni takze funkcje portalu do oceny i zdobycia informacji o produktach.`
      },
      {
        title: "Football",
        imgIdx: 0,
        imgSrc: ["./assets/football-1.png", "./assets/football-2.png"],
        tech: Tech.React,
        desc:
        `Aplikacja pokazujaca na biezaco statystyki meczu pilkarskiego. 
        Przewiduje ona szanse wygranej kazdej z druzyn.`,
      },
      {
        title: "Paznokieć",
        imgSrc: [
          "./assets/nail-1.png"
        ],
        imgIdx: 0,
        tech: Tech.Wordpress,
        desc: 
        `Strona salonu pieknosci z Warszawy. Dotyczy kursu stylizacji paznokci.`,
      },
      {
        title: "Phaser game",
        imgSrc: [
          "./assets/game-1.jpg",
          "./assets/game-2.jpg",
          "./assets/game-3.jpg",
          "./assets/game-4.jpg",
          "./assets/game-5.jpg",
          "./assets/game-6.jpg",
          "./assets/game-7.jpg",
          "./assets/game-8.jpg",
          "./assets/game-9.jpg",
        ],
        imgIdx: 0,
        tech: Tech.Phaser ,
        desc: 
        `Przegladarkowa gra w korej celem jest zakrecenie hydrantow zanim woda zaleje akwarium. 
        Poza woda zagrozneiem sa osmiornice i wszechobecna ciemnosc.`
      },
    ];
  }

  ngOnInit(): void {
  }

}
