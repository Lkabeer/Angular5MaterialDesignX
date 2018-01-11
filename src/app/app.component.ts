import { EditCourseComponent } from './edit-course/edit-course.component';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/timer';
import { startWith } from "rxjs/operators/startWith";
import { map } from "rxjs/operators/map";
import { MatDialog } from '@angular/material';

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

  isLoading = false;

  constructor(private diaglog: MatDialog) {
    this.isLoading = true;
    this.getCourses()
      .subscribe(x => this.isLoading = false);
  }

  getCourses() {
    return Observable.timer(2000);
  }

  openDialog() {
    this.diaglog.open(EditCourseComponent, {
      data: { name: 'Ahmed' },
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }

  autocompleteControl: FormControl = new FormControl();

  options = [
    'one',
    'two',
    'three'
  ];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.autocompleteControl.valueChanges
      .pipe(
      startWith(''),
      map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  showFiller = false;
}
