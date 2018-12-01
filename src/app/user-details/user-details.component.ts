import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from './../global/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId:number;
  user:any = {};
  dataLoading:boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.id;
      this.getUserDetails();
    });
  }

  ngOnInit() {
  }

  getUserDetails() {
    this.dataLoading = true;
    this.userService.getUserDetails(this.userId)
      .then(response => {
        this.user = response;
        this.dataLoading = false;
      })
      .catch(error => {
        console.log('Error: ', error);
        this.dataLoading = false;
      });
  }

  goBack(event) {
    this.location.back();
    event.stopPropagation();
  }

}
