import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="jumbotron" (click)="addExclamationToTile()">
      <h1 [class]="h1Class"> {{ title }}  <span *ngIf="h1Class === 'red'" > ? </span> </h1>
      <!-- <h2 *ngFor="let x of [1,2,3,4]"> Podtyuł {{x}} </h2> -->
    </header>
  `,
  styles: [
    `
      .red {
        color: red
      }
      .green {
        color: green
      }
    `
  ]
})
export class HeaderComponent implements OnInit {

  h1Class = 'green';
  title = 'Auction Portal';

  constructor() { }

  ngOnInit(): void {
    // this.title = '!!';
  }

  addExclamationToTile(): void {
    this.title += '!';
    this.h1Class = (this.h1Class === 'red') ? 'green' : 'red';
    // ? zmieniaj nazwę klasy h1Class z red na green i odwrotnie tutaj!
  }

}
