import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { BillService } from './bill.service';
import { Bill } from './bill';

@Component({
  moduleId: module.id + '',
  selector: 'my-hero-detail',
  templateUrl: 'bill-detail.component.html'
})
export class BillDetailComponent implements OnInit {

  constructor(
  private billService: BillService,
  private route: ActivatedRoute,
  private location: Location
 ) {}

	@Input()
	bill: Bill;

  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.billService.getBill(+params['id']))
    .subscribe(bill => this.bill = bill);
  }

  goBack(): void {
  this.location.back();
  }
}