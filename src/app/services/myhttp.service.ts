import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class MyhttpService {
  public API = "https://api.github.com/repos/manolo07/linio-test";

  constructor(private http:Http) { }

  query(source:string, public_url:boolean = false): Observable<{}> {
    return this.http.get(this.API + source)
      .map((res: Response) => {
        return res.json()
      })
      .catch(this.handleError.bind(this));
  }

  private handleError(error:any){
    console.log(error);
    return Observable.throw(error);
  }

}
