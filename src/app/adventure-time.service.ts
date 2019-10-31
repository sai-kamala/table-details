import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AdventureTimeService {
  constructor(private http: HttpClient) { }
   public getJSON(): Observable<any>{
        return this.http.get('./assets/data.json').pipe(map(res => res));
   }
}


