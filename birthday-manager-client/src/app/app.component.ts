import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from './person';
import { PersonService } from './person-service';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'birthday-manager-client';
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'address', 'birthday', 'delete', 'update'];
  @ViewChild(MatSort)
  sort!: MatSort;
  public personService: PersonService;
  dialog:MatDialog;
  ngOnInit() : void {
    this.personService.findAll();
  }

  constructor(d : MatDialog, ps : PersonService){
    
    this.dialog = d;
    this.personService = ps;
  }

  sortByFirstname():void{   
    this.personService.persons.sort((a, b) => a.firstname.localeCompare(b.lastname));
  }

  
  sortByLastname():void{
    this.personService.persons.sort((a, b) => b.lastname.localeCompare(a.lastname));
  }

  sortByBirthday():void{
    this.personService.persons.sort((a,b) => b.birthday.localeCompare(a.birthday));
  }

  sortById():void{
 
    this.personService.persons.sort();
  }
  sortByAddress():void{
    console.log('address')
    this.personService.persons.sort((a,b) => b.address.localeCompare(a.address));
  }
  hasBirthday():boolean{
    return true;
  }

  getClass(person:Person):string{
    let date:Date = new Date(person.birthday);
    let current = new Date(Date.now());
    if(date.getMonth() === current.getMonth() && date.getDate() === current.getDate()){
      return "birthday";
    } else if(date.getMonth() === current.getMonth() && date.getDate() > current.getDate()) {
      return "month";
    } else {

      return "soon";
    }
  }

  onAdd(firstname:string, lastname:string, birthday:string,address:string){
  console.log(birthday)
    let person = new Person(address, birthday, firstname, 1, lastname);

    this.personService.addPerson(person);
  }

  onDelete(person:Person){
    this.personService.delete(person.id);
  }

  onUpdate(person:Person){
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      data:person
    });

    dialogRef.afterClosed().subscribe(data => {

      if(data !== 'cancel'){
        this.personService.update(data);
      } else {
        console.log(data);
      }
    })
  }
}


