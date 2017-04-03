import { Injectable } from '@angular/core';
import { Meeting } from './meeting';
import { MEETINGS } from './mock-meetings';
import { DetailedMettings } from './mock-meetings';


@Injectable()
export class MeetingService {
    getMeetings(): Promise<Meeting[]>
    {
       return Promise.resolve(MEETINGS);
    }

    getMeeting(id: number): Promise<Meeting> {
        return this.getMeetings()
            .then((meetings) => meetings.find((meeting) => meeting.id === id));
    }

    getMeetingsWithDetails(): Promise<Meeting[]>
    {
       return Promise.resolve(DetailedMettings);
    }
    
    getMeetingDetail(id: number): Promise<Meeting> {
        return  this.getMeetingsWithDetails()
            .then((meetings) => meetings.find((meeting) => meeting.id === id));
    }

    getLastMeeting():Promise<Meeting>{
        return Promise.resolve(MEETINGS[0]);
    }

}