import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postex-dashboard';
  developers=[{name:'Front-end',icon:'fab fa-html5'},
  {name:'Backend',icon:'fab fa-js'},{name:'full-stack',icon:'fab fa-css3'},
  {name:'React',icon:'fab fa-react'},{name:'angular',icon:'fab fa-php'},
  {name:'Bootstrap',icon:'fab fa-bootstrap'}];
  categories=[{name:'Custome apps',icon:'fas fa-code'},{name:'Bussiness app',icon:'fas fa-chart-simple'},
  {name:'Designing',icon:'fas fa-pen'},{name:'Markeeting',icon:'fas fa-chart-line'},
{name:'Video',icon:'fas fa-music'},{name:'development',icon:'fas fa-cog'}]
}
