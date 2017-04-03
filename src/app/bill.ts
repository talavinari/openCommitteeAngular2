import { Minister } from './minister';

export class Bill {
  id: number;
  name: string;
  oknesset_url: string;
  passed: boolean;
  yay?:Minister[];
  nay?:Minister[];
  sustained?:Minister[];
  others?:Minister[];
}

