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

  onChange($event) {
    console.log($event);
  }
}
