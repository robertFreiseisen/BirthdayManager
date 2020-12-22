import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogContent, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Person } from '../person';
import { PersonService } from '../person-service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:Person) { }

  ngOnInit(): void {
  }

  save(firstname:string, lastname:string, address:string){
    this.data.address = address;
    this.data.firstname = firstname;
    this.data.lastname = lastname;

    console.log(this.data);
    
    this.dialogRef.close(this.data);
  }

  close(){
    this.dialogRef.close('cancel');
  }
 
}
