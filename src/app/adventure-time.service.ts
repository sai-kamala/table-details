import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range, pipe, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AdventureTimeService {
  constructor(private http: HttpClient) { }
   public getJSON(): Observable<any>{
        var response = this.http.get('./assets/data.json').pipe(map(res => res));
        return response;
   }


}


