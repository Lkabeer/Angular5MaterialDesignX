import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'X-Team';
  isChecked = true;
  
  onChange($event) {
    console.log($event);
  }
}
