import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
submited = false;
usuario: any = {
  nome: null,
  email: null
}

onSubmit(form){
  console.log(form);
  console.log(this.usuario);
  this.submited = true;
}

  constructor() { }

  ngOnInit(): void {
  }

  verificaErro(campo) {
    return !campo.valid && campo.touched;
  }
  verificaValid(campo){
    return campo.valid ;
  }


  aplicaCss(campo) {
    return {
      'has-error': this.verificaErro(campo),
      'has-success': this.verificaValid(campo),
       }
  }
  



}
