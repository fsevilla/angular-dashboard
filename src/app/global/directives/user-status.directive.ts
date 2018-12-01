import { Directive, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appUserStatus]'
})
export class UserStatusDirective implements AfterViewInit {

  @Input() appUserStatus:any;
  constructor() {
    console.log('Initialized');
  }

  ngAfterViewInit() {
  
  }

}
