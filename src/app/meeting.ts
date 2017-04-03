import { Minister } from './minister';
import { Bill } from './bill';

export class Meeting {
  id: number;
  took_place: string;
  bill_count?: number;
  proposed_bills?:Bill[];
  voting_ministers?:Minister[];
  missing_ministers?:Minister[];
  non_voting_ministers?:Minister[];
}