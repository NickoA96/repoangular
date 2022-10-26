import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../../datos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public DatosService: DatosService) { }

 

  

  ngOnInit(): void {
  }

}

