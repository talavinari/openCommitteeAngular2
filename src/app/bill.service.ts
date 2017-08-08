import { Injectable } from '@angular/core';
import { Bill } from './bill';
import { BILLS } from './mock-bills';
import 'rxjs/add/operator/toPromise';
import {BillResponseInterface} from './bill-response-interface';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BillService {
    private billsUrl = 'http://www.vaadat-sarim.org.il/api/bills/';
    private allBillsUrl = 'http://www.vaadat-sarim.org.il/api/bills/';

    constructor (private http: Http) {}

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }

    getLastBills(): Promise<Bill[]>
    {
        return this.http.get(this.billsUrl + '?page=1')
                 .toPromise()
                 .then(this.extractData)
                 .then(response => response as Bill[])
                 .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body.results || { };
    }

    getBills(page: number): Promise<Bill[]>
    {
        console.error('page is ' + page);
        console.error('sending ' + this.billsUrl + '?page=' + page);
        return this.http.get(this.billsUrl + '?page=' + page)
                 .toPromise()
                 .then(this.extractData)
                 .then(response => response as Bill[])
                 .catch(this.handleError);
    }

    getBillsObs(page: number): Observable<BillResponseInterface>
    {
        return this.http.get(this.billsUrl + '?page=' + page)
                 .map(res=>res.json());
                 //.catch(this.handleError);
    }

    getAllBills():Promise<Bill[]>
    {
        return this.http.get(this.allBillsUrl)
                 .toPromise()
                 .then(this.extractData)
                 .then(response => response as Bill[])
                 .catch(this.handleError);
    }

    getBill(id: number): Promise<Bill> {
        return this.http.get(this.billsUrl + id)
                 .toPromise()
                 .then(response => response.json() as Bill)
                 .catch(this.handleError);
    }
}