import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @ViewChild(TimelineComponent)
  public timelineCmp: TimelineComponent;

  public elRef: ElementRef;
  public timelineProgress = 0;

  constructor(elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit(): void {
  }

  public onProgressChange(newProgress: number) {
    this.timelineProgress = newProgress;
  }

  public startTimeline() {
    this.timelineCmp.startTimeline();
  }
}
