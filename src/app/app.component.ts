import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string  = 'X-Team';
  isChecked: boolean = true;
  radioValue: string = "";
  
  selected: string = "";
  foods = [
    {
      name: 'Steak',
      price: 20
    },
    {
      name: 'Pizza',
      price: 15
    },
    {
      name: 'Tacos',
      price: 10
    },
  ]

  onChange($event) {
    console.log($event);
  }
}
