import {Component, OnInit, OnDestroy} from '@angular/core';
import {IssuesService} from "../issues.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styles: [
    `
      table {
        width: 100%;
      }
    `
  ]
})
export class IssuesListComponent implements OnInit, OnDestroy {
  private subscription:Subscription;
  private issues:any[];

  constructor(private http:IssuesService) { }

  ngOnInit() {
    this.subscription = this.http.query().subscribe((r:any[]) => this.issues = r);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
