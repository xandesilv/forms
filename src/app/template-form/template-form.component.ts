import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

usuario: any = {
  nome: null,
  email: null
}

onSubmit(form){
  console.log(form);
  //console.log(this.usuario);
  this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).pipe(map((res: any) => res))
  .subscribe(dados => console.log(dados));
}

  constructor(private http: HttpClient) { }

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

  consultaCEP(cep, form) {

    cep = cep.replace (/\D/g, '');

    if (cep != null && cep !== '') {
      let validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)){
        this.resetaDadosForm(form);

        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .pipe(map((dados: any) => dados))
          .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
 }

 populaDadosForm(dados, formulario){
  // formulario.setValue({
  //     nome: formulario.value.nome,
  //     email: formulario.value.email,
  //     endereco: {
  //       cep: dados.cep ,
  //       rua: dados.logradouro,
  //       numero: '',
  //       complemento: dados.complemento ,
  //       bairro: dados.bairro,
  //       cidade: dados.localidade ,
  //       estado: dados.uf
  //     }
  //   });
formulario.form.patchValue({
    endereco: {
      rua: dados.logradouro,
      // cep: dados.cep,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    }
  });

  // console.log(form);
}

resetaDadosForm(formulario) {
  formulario.form.patchValue({
    endereco: {
      rua: null,
      complemento: null,
      bairro: null,
      cidade: null,
      estado: null
    }
  });
}

}
