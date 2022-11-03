import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-control',
  templateUrl: './campo-control.component.html',
  styleUrls: ['./campo-control.component.scss']
})
export class CampoControlComponent implements OnInit {

@Input() mostrarErro: boolean;
@Input() msgErro: string;
@Input() mostrarValid: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
