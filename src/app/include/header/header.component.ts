import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
menu_show:boolean=false;

clickEventHandler(){
  this.menu_show = !this.menu_show;
}
close_handel(){
  this.menu_show = false;
}
}
