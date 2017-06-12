import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";

import {MyhttpService} from "../services/myhttp.service";
import { IssuesComponent } from './issues.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import {IssuesService} from "./issues.service";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [IssuesComponent, IssuesListComponent],
  exports: [IssuesComponent],
  providers: [MyhttpService, IssuesService]
})

export class IssuesModule { }
