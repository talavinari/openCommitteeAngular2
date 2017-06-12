import { Injectable } from '@angular/core';
import { Minister } from './minister';

import { MINISTERS, MINISTERS_DETAILS } from './mock-minister';
import {VOTES} from './mock-vote';
import {Vote} from './vote';

import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';

@Injectable()
export class MinisterService {
    private ministersUrl = 'http://www.vaadat-sarim.org.il/api/ministers/';

    constructor (private http: Http) {}

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }


    getMinisters(): Promise<Minister[]>
    {
        return this.http.get(this.ministersUrl + '?page_size=20')
                 .toPromise()
                 .then(this.extractData)
                 .then(response => response as Minister[])
                 .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.results || { };
    }

    getMinisterVotes(id: number):Promise<Vote[]>
    {
        return this.http.get(this.ministersUrl + id + '/votes')
                 .toPromise()
                 .then(this.extractData)
                 .then(response => response as Vote[])
                 .catch(this.handleError);
    }
    
    getMinsterDetail(id: number): Promise<Minister> {
        return this.http.get(this.ministersUrl + id)
                 .toPromise()
                 .then(response => response.json() as Minister)
                 .catch(this.handleError);
    }

}