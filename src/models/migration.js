import {resolve} from "path"
import { Database } from 'sqlite-async';

const dbFile = resolve("src", "models", "db.sqlite");

export default async function connect() {
  return await Database.open(dbFile);
}