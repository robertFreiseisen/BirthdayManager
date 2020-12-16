import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatTableDataSource } from '@angular/material/table';
import {Person} from 'src/app/person';
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  menuTopLeftPosition =  {x: '0', y: '0'}
  @Input()
  persons!: Array<Person>;
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(index: number) {
    this.persons.splice(index, 1);
  }
}
