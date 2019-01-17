import { Component, OnInit } from '@angular/core';
import * as Common from 'system-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let list = new Common.List<string>();
    list.AddRange(['Frank', 'Mario']);
    let results = list.Where(x => true);
    for (let result of results) {
      console.log(result);
    }
  }
  title = 'system-common-app';
}
