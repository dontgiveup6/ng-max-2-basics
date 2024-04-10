import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server created.';
  serverName: string = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created. Name is ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServer(event: Event) {
    console.log(event);

    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
