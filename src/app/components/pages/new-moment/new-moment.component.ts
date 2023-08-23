import { Component, OnInit } from '@angular/core';

import { moment } from 'src/app/moment';

import { MomentService } from 'src/app/services/moment.service';

import { MassagesService } from 'src/app/services/massages.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit{
  btnText = 'Compartilhar!';
  
  constructor(
    private momentService: MomentService, 
    private massagesService: MassagesService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    
  }

  async createHandler(moment: moment) {
    const formData = new FormData()
    
    formData.append("title", moment.title);
    formData.append("desciption", moment.description);

    if(moment.image) {
      formData.append("image", moment.image);
    }

    //to do

    await this.momentService.createMoment(formData).subscribe();

    this.massagesService.add("Momento adicionado com sucesso")

    this.router.navigate(['/']);
  }
}
