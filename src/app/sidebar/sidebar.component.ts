import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navbarshow:boolean=false;
  toggleNavbar(){
this.navbarshow=!this.navbarshow;
  }
  manu:{name:string,icon:string}[]=[{name:'Dashboard',icon:'fas fa-home'},{name:'About',icon:'fas fa-question'},{name:'Projects',icon:'fas fa-project-diagram'},{name:'Users',icon:'fas fa-chalkboard-user'},{name:'Contact us',icon:'fas fa-headset'}]
}
