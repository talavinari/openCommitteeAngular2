import { Injectable } from '@angular/core';
import { Meeting } from './meeting';
import { MEETINGS } from './mock-meetings';
import { DetailedMettings } from './mock-meetings';

import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';

@Injectable()
export class MeetingService {

    private meetingsUrl = 'http://www.vaadat-sarim.org.il/api/meetings/';

    constructor (private http: Http) {}

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.results || { };
    }

    getMeetings(): Promise<Meeting[]>
    {
        return this.http.get(this.meetingsUrl)
                 .toPromise()
                 .then(this.extractData)
                 .then(response => response as Meeting[])
                 .catch(this.handleError);
    }

    getMeeting(id: number): Promise<Meeting> {
        return this.getMeetings()
            .then((meetings) => meetings.find((meeting) => meeting.id === id));
    }

    getMeetingDetail(id: number): Promise<Meeting> {
        return this.http.get(this.meetingsUrl + id)
                 .toPromise()
                 .then(response => response.json() as Meeting)
                 .catch(this.handleError);
    }

    getLastMeetings():Promise<Meeting[]>{
        return this.http.get(this.meetingsUrl + '?page=1')
                 .toPromise()
                 .then(this.extractData)
                 .then(response => response as Meeting[])
                 .catch(this.handleError);
        
    }

    getLastMeeting():Promise<Meeting> {
        return this.http.get(this.meetingsUrl + '?page=1')
                 .toPromise()
                 .then(this.extractData)
                 .then(this.extractFirst)
                 .then(response => response as Meeting[])
                 .catch(this.handleError);
    }


    private extractFirst(meetings: Meeting[]) {
        return meetings[0];
    }
    
}