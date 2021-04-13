import { Component, ElementRef, OnInit } from '@angular/core';
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

interface Note {
  pitch:  number,
  length: number,
  position: number;
  playTime: number;
}

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent {
  public faPlay = faPlayCircle;

  private audioContext: AudioContext;
  private pieceAudioBuffer: AudioBuffer | null = null;

  private beatTime = 435;
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
  public played = false;

  public basePitch = 7.7;
  public basePosition = 10;
  // public baseMeasureLength = 30;

  public notes: Array<Note> = [
    { pitch: 8, length: 8,  position: 0, playTime: 0 },
    { pitch: 6, length: 8,  position: 0, playTime: 0 },

    { pitch: 4, length: 4,  position: 0, playTime: 0 },
    { pitch: 6, length: 4,  position: 0, playTime: 0 },
    { pitch: 8, length: 4,  position: 0, playTime: 0 },
    { pitch: 7, length: 8,  position: 0, playTime: 0 },

    { pitch: 7, length: -4,  position: 0, playTime: 0 },
    { pitch: 7, length: 8,  position: 0, playTime: 0 },

    { pitch: 5, length: 8,  position: 0, playTime: 0 },
    { pitch: 4, length: 4,  position: 0, playTime: 0 },
    { pitch: 6, length: 4,  position: 0, playTime: 0 },

    { pitch: 5, length: 4,  position: 0, playTime: 0 },
    { pitch: 7, length: 12, position: 0, playTime: 0 },

    { pitch: 7, length: -8, position: 0, playTime: 0 },
    { pitch: 7, length: -8, position: 0, playTime: 0 },

    { pitch: 8, length: 8, position: 0, playTime: 0 },
    { pitch: 6, length: 8, position: 0, playTime: 0 },

    { pitch: 4, length: 4, position: 0, playTime: 0 },
    { pitch: 6, length: 4, position: 0, playTime: 0 },
    { pitch: 8, length: 4, position: 0, playTime: 0 },
    { pitch: 9, length: 4, position: 0, playTime: 0 },

    { pitch: 7, length: 12, position: 0, playTime: 0 },
    { pitch: 7, length: 4, position: 0, playTime: 0 },

    { pitch: 5, length: 4, position: 0, playTime: 0 },
    { pitch: 4, length: 4, position: 0, playTime: 0 },
    { pitch: 6, length: 4, position: 0, playTime: 0 },
    { pitch: 9, length: 4, position: 0, playTime: 0 },

    { pitch: 8, length: 12, position: 0, playTime: 0 },
    { pitch: 6, length: 4, position: 0, playTime: 0 },

    { pitch: 4, length: 4,  position: 0, playTime: 0 },
    { pitch: 3, length: 4,  position: 0, playTime: 0 },
    { pitch: 5, length: 4,  position: 0, playTime: 0 },
    { pitch: 7, length: 4,  position: 0, playTime: 0 },

    { pitch: 10, length: 4,  position: 0, playTime: 0 },
    { pitch: 9, length: 12,  position: 0, playTime: 0 },

    { pitch: 8, length: 4, position: 0, playTime: 0 },
    { pitch: 9, length: 4, position: 0, playTime: 0 },
    { pitch: 10, length: 4, position: 0, playTime: 0 },
    { pitch: 7, length: 4, position: 0, playTime: 0 },

    { pitch: 5, length: 8, position: 0, playTime: 0 },
    { pitch: 7, length: -8, position: 0, playTime: 0 },
  ];
  public notesBass: Array<Note> = [
    { pitch: 7, length: -8, position: 0, playTime: 0 },
    { pitch: 7, length: -8, position: 0, playTime: 0 },

    { pitch: 7, length: -8, position: 0, playTime: 0 },
    { pitch: 7, length: -8, position: 0, playTime: 0 },

    { pitch: 7, length: -8, position: 0, playTime: 0 },
    { pitch: 7, length: -8, position: 0, playTime: 0 },

    { pitch: 7, length: -8, position: 0, playTime: 0 },
    { pitch: 7, length: -8, position: 0, playTime: 0 },

    { pitch: 7, length: -8, position: 0, playTime: 0 },
    { pitch: 7, length: -8, position: 0, playTime: 0 },

    { pitch: 6, length: 8, position: 0, playTime: 0 },
    { pitch: 5, length: 8, position: 0, playTime: 0 },

    { pitch: 4, length: 8, position: 0, playTime: 0 },
    { pitch: 1, length: 8, position: 0, playTime: 0 },

    { pitch: 2, length: 8, position: 0, playTime: 0 },
    { pitch: 4, length: 8, position: 0, playTime: 0 },

    { pitch: 3, length: 8, position: 0, playTime: 0 },
    { pitch: 3, length: 8, position: 0, playTime: 0 },

    { pitch: 2, length: 8, position: 0, playTime: 0 },
    { pitch: 0, length: 8, position: 0, playTime: 0 },

    { pitch: 1, length: 8, position: 0, playTime: 0 },
    { pitch: 4, length: 8, position: 0, playTime: 0 },

    { pitch: 5, length: 8, position: 0, playTime: 0 },
    { pitch: 6, length: 8, position: 0, playTime: 0 },

    { pitch: 5, length: 8, position: 0, playTime: 0 },
    { pitch: 3, length: 8, position: 0, playTime: 0 },

    { pitch: 4, length: 8, position: 0, playTime: 0 },
    { pitch: 4, length: 8, position: 0, playTime: 0 },

    { pitch: 5, length: -8, position: 0, playTime: 0 },
    { pitch: 5, length: -8, position: 0, playTime: 0 },
  ];
  public time = 0;
  public scroll = 0;

  public numberOfMeasures: Array<number>;

  constructor(public elRef: ElementRef) {
    if ('webkitAudioContext' in window) {
      this.audioContext = new (window as any).webkitAudioContext();
    } else {
      this.audioContext = new AudioContext();
    }

    this.getAudioFile(this.audioContext, "/assets/o4.mp3").then(buffer => {
      this.pieceAudioBuffer = buffer;
    });

    this.time = 0;
    this.notes[0].position = this.time;
    this.notes[0].playTime = this.beatTime * (this.notes[0].length / 4);

    this.notes.forEach((note, idx) => { 
      if (idx === 0) return;

      this.time += Math.abs(this.notes[idx - 1].length);
      
      note.position = this.time;
      note.playTime = this.beatTime *  Math.abs((note.length / 4));
    });


    this.time = 0;
    this.notesBass[0].position = this.time;
    this.notesBass[0].playTime = this.beatTime * Math.abs((this.notesBass[0].length / 4));

    this.notesBass.forEach((note, idx) => {
      if (idx == 0) return;

      this.time += Math.abs(this.notesBass[idx - 1].length);
      
      note.position = this.time;
      note.playTime = this.beatTime *  Math.abs((note.length / 4));
    });

    this.numberOfMeasures = new Array(Math.floor((this.time + this.notes[this.notes.length - 1].length) / 16)).fill(0);
    this.numberOfMeasures.push(0);
    // console.log("there are ", this.numberOfMeasures);
    
  }

  public playMusic(): void {
    if(this.played && this.pieceAudioBuffer) return;
    this.played = true;
    
    let notes = (this.elRef.nativeElement as HTMLElement).getElementsByClassName("staff__note--treble");

    const sortedNotesTreble = Array.from(notes).sort((a, b) => {
      const aNum = Number((a as HTMLElement).style.left.substr(0, (a as HTMLElement).style.left.length - 1));
      const bNum = Number((b as HTMLElement).style.left.substr(0, (b as HTMLElement).style.left.length - 1));

      return ( aNum < bNum ) ? -1 : 1;
    });

    notes = (this.elRef.nativeElement as HTMLElement).getElementsByClassName("staff__note--bass"); 
    const sortedNotesBass = Array.from(notes).sort((a, b) => {
      const aNum = Number((a as HTMLElement).style.left.substr(0, (a as HTMLElement).style.left.length - 1));
      const bNum = Number((b as HTMLElement).style.left.substr(0, (b as HTMLElement).style.left.length - 1));

      return ( aNum < bNum ) ? -1 : 1;
    }); 
    // console.log(sortedNotes);
    

    // const sortedNotesA = Array.from(notes).slice(0, 6).sort((a, b) => {
    //   return ((a as HTMLElement).style.left < (b as HTMLElement).style.left) ? -1 : 1;
    // });
    // const sortedNotesB = Array.from(notes).slice(6).sort((a, b) => {
    //   return ((a as HTMLElement).style.left < (b as HTMLElement).style.left) ? -1 : 1;
    // });

    // console.log(sortedNotes);
    

    let cummTime = 0;
    for (let i = 0; i < sortedNotesTreble.length; ++i) {
      if (this.notes[i].length > 0) {
        // console.log(this.notes[i].length);
        
        setTimeout(() => {
          sortedNotesTreble.forEach(note => note.classList.remove("staff__note--playing"));

          (sortedNotesTreble[i] as HTMLElement).classList.add("staff__note--playing");
        }, cummTime);
      }
      cummTime += this.notes[i].playTime;
    }

    cummTime = 0;
    for (let i = 0; i < sortedNotesBass.length; ++i) {
      if (this.notesBass[i].length > 0) {
        // console.log(this.notes[i].length);
        
        setTimeout(() => {
          sortedNotesBass.forEach(note => note.classList.remove("staff__note--playing"));

          (sortedNotesBass[i] as HTMLElement).classList.add("staff__note--playing");
        }, cummTime);
      }
      cummTime += this.notesBass[i].playTime;
    }

    // 221.5px

    (document.getElementsByClassName("staff__notes-wrapper")[0] as HTMLElement).classList.add("staff__note-wrapper--moving");
    (document.getElementsByClassName("staff__notes-wrapper")[1] as HTMLElement).classList.add("staff__note-wrapper--moving");
    // setTimeout(() => {
    //   (document.getElementsByClassName("staff__notes-wrapper")[0] as HTMLElement).classList.add("staff__note-wrapper--moving");
    //   (document.getElementsByClassName("staff__notes-wrapper")[1] as HTMLElement).classList.add("staff__note-wrapper--moving");
    //   // sortedNotes.forEach(note => note.classList.add("staff__note-wrapper--moving"));
    // }, 5000);

    const node  = this.audioContext.createBufferSource();
    node.buffer = this.pieceAudioBuffer;
    node.connect(this.audioContext.destination);
    node.start();

    setTimeout(() => {
      (document.getElementsByClassName("staff__notes-wrapper")[0] as HTMLElement).classList.remove("staff__note-wrapper--moving");
      (document.getElementsByClassName("staff__notes-wrapper")[1] as HTMLElement).classList.remove("staff__note-wrapper--moving"); 
      this.played = false
    }, 30 * 1000);

    // let cummTime = 0;
    // for (let i = 0; i < sortedNotesA.length; ++i) {
    //   cummTime += this.notes[i].playTime;

    //   setTimeout(() => {
    //     sortedNotesA.forEach(note => note.classList.remove("staff__note--playing"));

    //     (sortedNotesA[i] as HTMLElement).classList.add("staff__note--playing");
    //   }, cummTime);
    // }

    // for (let i = 0; i < sortedNotesB.length; ++i) {
    //   cummTime += this.playTimes[6 + i];

    //   setTimeout(() => {
    //     sortedNotesA.forEach(note => note.classList.remove("staff__note--playing"));
    //     sortedNotesB.forEach(note => note.classList.remove("staff__note--playing"));

    //     (sortedNotesB[i] as HTMLElement).classList.add("staff__note--playing");
    //   }, cummTime);
    // }

    // console.log(this.notes);
    
    // console.log(sortedNotesA);
    // console.log(sortedNotesB);
  }

  private getAudioFile(audioContext: AudioContext, filepath: string) {
    return new Promise<AudioBuffer>((resolve, reject) => {
      fetch(filepath).then(response => {
        response.arrayBuffer().then(buffer => {
          audioContext.decodeAudioData(buffer, (ab) => { 
            resolve(ab); 
          }, (e) => { reject(e); });    
        })
      });
    });
  }
}
