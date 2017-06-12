import { Injectable } from '@angular/core';
import {MyhttpService} from "../services/myhttp.service";
import {Observable} from "rxjs";

@Injectable()
export class IssuesService {

  constructor(private http:MyhttpService) { }

  query(): Observable<any[]> {
    return this.http.query('/issues').map((l:any) => l)
  }
}
