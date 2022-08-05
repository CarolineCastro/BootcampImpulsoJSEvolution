import { Pool } from "pg";


const connectionString = 'postgres://btcdpdpq:zwjTyby1lTD2V4vFwbOToN-tCVdeqrBp@kesavan.db.elephantsql.com/btcdpdpq';
const db = new Pool({ connectionString });

export default db;