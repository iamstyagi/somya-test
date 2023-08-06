import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  currUrl: string;

  constructor(private routes: Router) {
    routes.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currUrl = event.url.split('/')[1];
      }
    })

   }
   showLogo: boolean = false;

  ngOnInit(): void {
  }
  head() {

    if (this.showLogo == false) {
      if ((document.getElementById("logo").style.width = "45px")) {
        document.getElementById("logo").style.display = "none";
        this.showLogo = true;
      }
    }
    else {
      document.getElementById("logo1").style.display = "none";


      this.showLogo = false;
    }
    // let bodyId = document.getElementById('defined-body')
    // let button = document.getElementsByTagName('body')[0]
    // button.classList.toggle('toggle-wrapper')

    const body = document.querySelector('body');
    if (body.classList.contains('toggle-wrapper')) {
      // Remove the class if it's already present
      body.classList.remove('toggle-wrapper');
    } else {
      // Add the class if it's not present
      body.classList.add('toggle-wrapper');
    }
  }

}
