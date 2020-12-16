import { Component, Input } from '@angular/core';
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
      new Person(1, "test", "person1", "teststrasse 123", new Date('7/22/2008 12:11:04 PM'))
    ];
  }

  onAdd(firstname:string, lastname:string, address:string,birthday:any){
    this.persons.push(new Person(2, firstname, lastname, address, new Date(birthday)));
  }
}
