import { Component, ElementRef, OnInit } from '@angular/core';
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent {
  public faPlay = faPlayCircle;

  private beatTime = 450;
  private playTimes = [
    0,
    2 * this.beatTime,
    2 * this.beatTime,
    this.beatTime,
    this.beatTime,
    this.beatTime,
    3 * this.beatTime,
    // 400,  // break
    2 * this.beatTime,
    2 * this.beatTime,
    this.beatTime,
    this.beatTime,
    this.beatTime,
    3 * this.beatTime
  ];
  private played = false;

  constructor(public elRef: ElementRef) {
  }

  public playMusic(): void {
    if(this.played) return;
    this.played = true;
    
    const notes = (this.elRef.nativeElement as HTMLElement).getElementsByClassName("staff__note");

    const sortedNotesA = Array.from(notes).slice(0, 6).sort((a, b) => {
      return ((a as HTMLElement).style.left < (b as HTMLElement).style.left) ? -1 : 1;
    });
    const sortedNotesB = Array.from(notes).slice(6).sort((a, b) => {
      return ((a as HTMLElement).style.left < (b as HTMLElement).style.left) ? -1 : 1;
    });

    // new Audio("/assets/o4.mp3").play();

    let cummTime = 0;
    for (let i = 0; i < sortedNotesA.length; ++i) {
      cummTime += this.playTimes[i];

      setTimeout(() => {
        sortedNotesA.forEach(note => note.classList.remove("staff__note--playing"));

        (sortedNotesA[i] as HTMLElement).classList.add("staff__note--playing");
      }, cummTime);
    }

    for (let i = 0; i < sortedNotesB.length; ++i) {
      cummTime += this.playTimes[6 + i];

      setTimeout(() => {
        sortedNotesA.forEach(note => note.classList.remove("staff__note--playing"));
        sortedNotesB.forEach(note => note.classList.remove("staff__note--playing"));

        (sortedNotesB[i] as HTMLElement).classList.add("staff__note--playing");
      }, cummTime);
    }

    // console.log(notes);
    
    // console.log(sortedNotesA);
    // console.log(sortedNotesB);
  }

}
