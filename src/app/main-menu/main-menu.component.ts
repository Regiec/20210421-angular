import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styles: [
  ]
})
export class MainMenuComponent implements OnInit {

  items: MenuItem[] = [
    {title: 'Aukcje', link: 'auctions'},
    {title: 'Promocje', link: 'promotions'},
    {title: 'Podpowiadamy', link: 'advices'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
