import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  empForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      employees: this.fb.array([]),
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
    });
  }

  addEmployee() {
    console.log('Adding a employee');
    this.employees().push(this.newEmployee());
  }

  removeEmployee(id: number) {
    this.employees().removeAt(id);
  }

  onSubmit() {
    console.log(this.empForm.value);
  }
}
