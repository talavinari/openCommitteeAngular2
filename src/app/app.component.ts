import { Component, Input, OnInit  } from '@angular/core';
import { MeetingService } from './meeting.service';
import { Meeting } from './meeting';
import { ActivatedRoute, Params }   from '@angular/router';



@Component({
  moduleId:module.id + '',
  selector: 'my-app',
  templateUrl: 'app.component.html'
})


export class AppComponent implements OnInit {

  constructor(
  private meetingService: MeetingService, 
  private route: ActivatedRoute
  ) {}


  title = 'ועדת שרים פתוחה';
  
  @Input()
  lastMeeting: Meeting;      
  
  ngOnInit(): void {
    this.meetingService.getLastMeeting().then(last => this.lastMeeting = last);
  }
      
}