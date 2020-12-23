import {Injectable} from '@angular/core';
import {Person} from './person';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  http: HttpClient; 
  public persons: Array<Person> = [];
  url: string = 'http://localhost:8080/person';

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): void {
    this.http.get<Person[]>(this.url + '/findAll').subscribe(data => this.persons = data);
    console.log(this.persons);
  }

  addPerson(person:Person): void {
    const body = JSON.stringify(person);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = {
      headers: headers
    }
    this.http.post<Person[]>(this.url + ('/create'), body, options).subscribe(data => this.persons = data);
  }

  delete(id : number):void{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = {
      headers: headers
    }

    this.http.delete<Person[]>(this.url + '/delete/' + id, options).subscribe(data => this.persons = data);
  }

  update(person: Person):void{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(person);
    const options = {
      headers: headers
    }

    this.http.put<Person[]>(this.url + '/update', body, options).subscribe(data => this.persons = data);
  }

}
