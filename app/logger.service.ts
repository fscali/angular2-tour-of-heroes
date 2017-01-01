import { Injectable } from '@angular/core'
export class Logger {

  logs: string[] = [];

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }

  dump() {
    for(let m of this.logs) {
      console.log(m);
    }
  }
}
