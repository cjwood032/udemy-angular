import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
    //styles: [ `
    //online {
    //    background-color: light-green;
    //}`]
})
export class ServerComponent {
    serverID: number = 10; // you can assign types as so.
    serverStatus = 'offline';
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}