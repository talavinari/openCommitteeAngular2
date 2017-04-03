import { Component } from '@angular/core';
import { Meeting } from './meeting';
import { MeetingService } from './meeting.service';
import { Router } from '@angular/router';


@Component({
  moduleId:module.id + '',
  selector: 'my-meetings',
  templateUrl: 'meetings.component.html'
})

export class MeetingsComponent { 
  meetings : Meeting[];
  
  constructor(private meetingsService: MeetingService , private router : Router) {}
  getMeetings(): void {
      
    this.meetingsService.getMeetings().then(meetings => this.meetings = meetings);
  }
   ngOnInit(): void {
    this.getMeetings();
  }

}