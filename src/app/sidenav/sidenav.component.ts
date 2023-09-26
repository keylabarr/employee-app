import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.screenWidth = window.innerWidth;

    if(this.screenWidth <= 575)
    {
      this.dateType = 'shortDate';
    } else
    {
      this.dateType = 'longDate';
    }
  }

  public dateType = 'shortDate'
  public nowDate: Date = new Date();
  public screenWidth: number = 0;

  constructor() { }

  ngOnInit(): void
  {
    this.screenWidth = window.innerWidth;
  }


}
