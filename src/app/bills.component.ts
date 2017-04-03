import { Component } from '@angular/core';
import { Bill } from './bill';
import { BillService } from './bill.service';
import { Router } from '@angular/router';

@Component({
  moduleId:module.id + '',
  selector: 'my-heroes',
  templateUrl: 'bills.component.html'
})

export class BillsComponent { 
  selectedBill: Bill;
  bills : Bill[];
  
  constructor(private billService: BillService , private router : Router) { 
  }
  
  getBills(): void {
    this.billService.getBills().then(bills => this.bills = bills);
  }
   ngOnInit(): void {
    this.getBills();
  }

  gotoDetail(bill: Bill): void {
  this.router.navigate(['/detail', bill.id]);
  }

}