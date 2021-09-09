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
        Uczestnicy podejmują decyzje po odsłuchu nagrań binauralnych.
        Wykorzystany do zebrania próbek w międzynarodowym badaniu.`,
        try: "http://audio.wi.pb.edu.pl",
        git: "https://github.com/Niekarp/binpoll-front-triple-stimulus"
      },
      {
        title: "WIZYTÓWKA",
        imgSrc: [
          "./assets/oskar-1.png",
          "./assets/oskar-2.png",
        ],
        imgIdx: 0,
        tech: Tech.Angular,
        desc: "Strona na której właśnie się znajdujesz. Moja internetowa wizytówka.",
      },
      {
        title: "NAILACADEMY",
        imgSrc: [
          "./assets/nail-1.png",
          "./assets/nail-2.png",
          "./assets/nail-3.png",
          "./assets/nail-4.png",
          "./assets/nail-5.png",
          "./assets/nail-6.png",
          "./assets/nail-7.png",
          "./assets/nail-8.png"
        ],
        imgIdx: 0,
        tech: Tech.Wordpress,
        desc: 
        `Szkoleniowa strona warszawskiego salonu manicure & pedicure. 
        Dotyczy oferty profesjonalnego kursu stylizacji paznokci.`,
        try: "http://nailacademy.pl"
      },
      {
        imgIdx: 0,
        title: "JULIK",
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
        `Strona internetowa o psieku Juliku. 
        Oferuje wybór psiego awatara, motywy kolorystyczne i zawiera ukryty katalog utworów muzycznych.`,
        try: "http://www.oskardadan.pl/julik/",
        git: "https://github.com/Niekarp/julik"
      },
      {
        title: "ANKIETY",
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
        `Platforma do przygotowywania, wypełniania i wyszukiwania ankiet internetowych. 
        Zawiera rozbudowany kreator ankiety obsługujacy kilka rodzajów pytań, w tym pytania warunkowe.`,
        try: "http://oskardadan.pl/ankiety/",
        git: "https://github.com/Niekarp/ankiety-frontend"
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
        `Platforma do rejestracji i generowania kodów QR produktów spożywczych. 
        Pełni także funkcję portalu do oceny i zdobycia informacji o produktach.`,
        git: "https://github.com/Niekarp/sops-front"
      },
      {
        title: "PHASER GAME",
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
        `Przeglądarkowa gra w kórej celem jest zakręcenie hydrantów zanim woda zaleje akwarium. 
        Poza woda zagrożneiem są ośmiornice i wszechobecna ciemność.`,
        try: "http://oskardadan.pl/game/game/",
        git: "https://github.com/Niekarp/Phaser-game"
      },
      {
        title: "FOOTBALL",
        imgIdx: 0,
        imgSrc: ["./assets/football-1.png", "./assets/football-2.png"],
        tech: Tech.React,
        desc:
        `Aplikacja pokazująca na bieżąco statystyki meczu piłkarskiego. 
        Przewiduje ona szansę wygranej każdej z drużyn.`,
        git: "https://github.com/Niekarp/football"
      },
    ];
  }

  ngOnInit(): void {
  }

}
