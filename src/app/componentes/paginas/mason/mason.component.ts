import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../../datos.service';

@Component({
  selector: 'app-mason',
  templateUrl: './mason.component.html',
  styleUrls: ['./mason.component.css']
})
export class MasonComponent implements OnInit {

  constructor(public DatosService: DatosService) { }

  ngOnInit(): void {
  }

}
