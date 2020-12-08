import { DatePipe } from '@angular/common';

export class Person {

    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public address:string
    ){};
    
      toString():String{
    
        return this.id + " " + this.firstname + " " + this.lastname; 
      } 
}
