import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { FormularioEnvioService } from '../formulario-envio.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'formulario',
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  providers: [provideNgxMask()], 
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  form: FormGroup;

  constructor(private http: HttpClient, public FormularioEnvioService: FormularioEnvioService, public router: Router) {
    this.form = new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmacaoSenha: new FormControl('', [Validators.required]),
      nomeCompleto: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', Validators.required),
      rg: new FormControl('',[Validators.required, Validators.pattern(/^\d{9}$/)]),
      cpf: new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      sexo: new FormControl('', Validators.required),
      termosAceitos: new FormControl(false, Validators.requiredTrue),
      notificacoes: new FormControl(false),
      
    });
  }

 onSubmit() {
  this.FormularioEnvioService.adicionarFormulario(this.form.value).subscribe((data) => {
    this.router.navigate(['confirmar']);
  });
}
}
