import sqlite3 from "sqlite3";
import { open } from "sqlite";

let connection = null;

export async function getDBConnection() {
  if (!connection) {
    connection = open({
      filename: "./database.db",
      driver: sqlite3.Database,
    });
  }
  return connection;
}
