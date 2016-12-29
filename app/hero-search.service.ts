import { Injectable } from "@angular/core";
import { Hero } from './hero';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';


@Injectable()
export class HeroSearchService {
  constructor(private http: Http) { }

  search(term: string): Observable<Hero[]> {
    return this.http
                .get(`app/heroes/?name=${term}`)
                .map((r: Response) => r.json().data as Hero[]);
  }

}
