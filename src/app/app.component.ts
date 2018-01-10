import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
}
