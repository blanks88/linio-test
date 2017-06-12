import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues',
  template: `
    <app-issues-list></app-issues-list>
  `,
  styles: []
})
export class IssuesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
