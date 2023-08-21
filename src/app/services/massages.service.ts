import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MassagesService {

  message: string = '';
  
  constructor() { }
}
