import { ILogger } from "../types";

// Service B
export class Logger implements ILogger {
  static $singleton = true;

  log(type: "info" | "error", message:string) {
    const date = new Date().toISOString();
    console[type](`[${type.toUpperCase()}]`, `[${date}]`, message);
  }
}
