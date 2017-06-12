import { Component, Input, OnInit  } from '@angular/core';
import { MeetingService } from './meeting.service';
import { Meeting } from './meeting';
import { ActivatedRoute, Params }   from '@angular/router';
import { Bill } from './bill';
import { BillService } from './bill.service';

@Component({
  moduleId:module.id + '',
  selector: 'my-app-index',
  templateUrl: 'index.component.html'
})

export class IndexComponent implements OnInit {

  constructor(
  private meetingService: MeetingService, 
  private route: ActivatedRoute,
  private billService: BillService
  ) {}
  
  @Input()
  lastMeeting: Meeting;

  bills : Bill[];      
  
  getBills(): void {
    this.billService.getLastBills().then(bills => this.bills = bills);
  }

  ngOnInit(): void {    
     this.meetingService.getLastMeetings().then(lastMeetings => this.lastMeeting = lastMeetings[0]);
     this.getBills();
  }
      
}