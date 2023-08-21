import { Component, OnInit } from '@angular/core';

import { moment } from 'src/app/moment';

import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit{
  btnText = 'Compartilhar!';
  
  constructor(private momentService: MomentService) { }

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

    //enviar para o service

    //exibir msg

    //redirect
  }
}
