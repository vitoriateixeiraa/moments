import { Component } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { MassagesService } from 'src/app/services/massages.service';

@Component({
  selector: 'app-massages',
  templateUrl: './massages.component.html',
  styleUrls: ['./massages.component.css']
})
export class MassagesComponent {
  faTimes = faTimes

  constructor(public MassagesService: MassagesService) {}
}
