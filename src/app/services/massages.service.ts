import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MassagesService {

  massage: string = '';
  
  constructor() { }

  add(massage: string) {
    this.massage = massage

    setTimeout(() =>{
      this.clear()
    }, 4000)
  }

  clear() {
    this.massage = '';
  }
}
