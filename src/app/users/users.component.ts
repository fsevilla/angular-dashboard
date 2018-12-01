import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from  '@angular/router';

import { UserService } from './../global/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  users:Array<any> = [];
  temp:Array<any> = [];
  table:any;
  editMode:any = {};

  columns = [
    { prop: 'name' },
    { prop: 'email' },
    { name: 'Phone' }
  ];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .then(res => {
        this.users = res;
        this.temp = [...res];
        console.log('Users: ', this.users);
      });
  }

  ngOnDestroy() {
    
  }

  goToDetails(idUser:number) {
    this.router.navigate([`users/${idUser}`]);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.users = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  editUser(user:any, event) {
    console.log('Will update user: ', user);
    event.stopPropagation();
    this.editMode[user.id] = !this.editMode[user.id];
  }

  isEditable(id:number) {
    return this.editMode[id];
  }

}
