import { AdapterSync } from 'lowdb';

export interface IDatabase {
  lowdb: any;
  adapter: AdapterSync<any>;
  [props: string]: any;
  initializeMongodb: () => Promise<any>;
}
