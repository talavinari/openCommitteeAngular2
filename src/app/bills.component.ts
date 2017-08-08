import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {Bill} from './bill';
import {PaginationInstance} from "ng2-pagination";
import {BillService} from './bill.service';
import {BillResponseInterface} from './bill-response-interface';
import {Router} from '@angular/router';

interface IOldServerResponse {
    items: Bill[];
    total: number;
}

@Component({
  moduleId:module.id + '',
  selector: 'my-heroes',
  templateUrl: 'bills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BillsComponent {
  constructor(private billService: BillService , private router : Router) { 
  }
    selectedBill: Bill;  
    asyncbills: Observable<Bill[]>;
    promiseBills: Promise<Bill[]>;
    pageNum: number = 1;
    total: number;
    loading: boolean;
    @Input('data') meals: string[] = ['bla', 'bla2', 'bla', 'bla2', 'bla', 'bla2'];

     public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next'
    };

    public config: PaginationInstance = {
        id: 'custom',
        itemsPerPage: 10,
        currentPage: 1
    };

    ngOnInit() {
        this.getPage(1);
    }

    getPage(page: number) {
        this.loading = true;
        this.pageNum = page;
        this.asyncbills = this.billService.getBillsObs(page)
            .do(res => {
                this.total = res.count;
                this.loading = false;
            })
            .map(res => res.results);


        // this.asyncbills = this.serverCall(this.bills, page)
        //     .do(res => {
        //         this.total = res.total;
        //         this.p = page;
        //         this.loading = false;
        //     })
        //     .map(res => res.items);
    }

  // public getBills(event): void {
  //   if (!Number.isNaN(event)){
  //     console.error('not NaN value is ' + event);
  //     this.billService.getBills(event).then(bills => this.bills = bills);
  //   }
  //   console.error('event is :' + event);
    
  //   return event;
  // }

  gotoDetail(bill: Bill): void {
  this.router.navigate(['/detail', bill.id]);
  }

  serverCall(meals: Bill[], page: number): Observable<IOldServerResponse> {
    const perPage = 2;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    // return Observable
    //     .of({
    //         items: meals.slice(start, end),
    //         total: 100
    //     }).delay(1000);

        return Observable
        .of({
            items: meals,
            total: 894
        }).delay(1000);
  }

}