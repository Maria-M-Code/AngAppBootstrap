
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {

  serverId: number;
  serverStatus: string  = 'offline';

  constructor() {
    this.serverId = Math.round((Math.random() * 10))
    this.serverStatus = this.serverId  > 5 ? 'online' : 'offline';

  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}