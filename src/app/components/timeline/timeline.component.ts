import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Output()
  public progressHappened = new EventEmitter<number>();

  @ViewChild("lineCover")
  public lineCover: ElementRef;

  @ViewChild("lineDate")
  public lineDate: ElementRef;

  public progress = 0;
  public year = 2011;
  private timespan = 2021 - this.year;

  constructor() { }

  ngOnInit(): void {
  }

  public startTimeline() {
    const timelineUpadateInterval = setInterval(() => {
      (this.lineCover.nativeElement as HTMLElement).style.transform = `scaleY(${Math.abs((100 - this.progress) / 100)})`;
      this.progress++;
      this.progressHappened.emit(this.progress);

      (this.lineDate.nativeElement as HTMLElement).style.transform = `scaleY(${1/Math.abs((100 - this.progress) / 100)})`; 

      if (this.progress < 92) {
        this.year = 2011 + Math.floor(this.timespan * (this.progress / 100));
      } else {
        this.year = 0;
      }

      if (this.progress > 100) {
        clearInterval(timelineUpadateInterval);
      }
    }, 200);
  }
}
