import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-items',
  templateUrl: './log-items.component.html',
  styleUrls: ['./log-items.component.css']
})
export class LogItemsComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1 )
    this.log.push(new Date())
  }

}
