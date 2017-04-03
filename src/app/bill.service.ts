import { Injectable } from '@angular/core';
import { Bill } from './bill';
import { BILLS } from './mock-bills';

@Injectable()
export class BillService {
    getBills(): Promise<Bill[]>
    {
       return Promise.resolve(BILLS);
    }
    getBill(id: number): Promise<Bill> {
        return this.getBills()
            .then(bills => bills.find(bill => bill.id === id));
    }
}