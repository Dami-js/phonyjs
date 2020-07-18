import { AdapterSync } from 'lowdb';

export interface Database {
  lowdb: any;
  adapter: AdapterSync<any>;
  [props: string]: any;
  initializeMongodb: () => Promise<any>;
}
