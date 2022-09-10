import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  users: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addUser(uname: any) {
    this.users.push({
      name: uname.value
    })
  }
  removeUser() {
    this.users.splice(this.users.length - 1);
  }
  onRemoveUser(i: any) {
    this.users.splice(i, 1)
  }
}
