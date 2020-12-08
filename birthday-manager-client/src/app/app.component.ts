import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons:Array<Person> = new Array<Person>();
  title = 'birthday-manager-client';

  ngOnInit() : void{
    this.persons = [
      new Person(1, "test", "person1", "teststrasse 123")
    ];
  }
}
