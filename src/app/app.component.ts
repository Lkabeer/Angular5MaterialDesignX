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
  ];

  minDate = new Date(2018, 0, 1);
  maxDate = new Date(2018, 1, 1);

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
      // Prevent Saturday and Sunday from being selected.    
    return day !== 0 && day !== 6;
  }

  dateControl = new FormControl(new Date());

  onChange($event) {
    console.log($event);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  categories = [
    {
      name: 'Beginner'
    },
    {
      name: 'intermediate'
    },
    {
      name: 'Advanced'
    },
  ];

  selectCategory(category) {
    this.categories
      .filter(c => c != category)
      .forEach(c => c['selected'] = false);

      category.selected = !category.selected;
  }
}
