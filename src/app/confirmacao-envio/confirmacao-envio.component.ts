import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'confirmacao-envio',
  imports: [CommonModule, NgxMaskPipe], 
  providers: [provideNgxMask(), DatePipe],
  templateUrl: './confirmacao-envio.component.html',
  styleUrl: './confirmacao-envio.component.css'
})
export class ConfirmacaoEnvioComponent implements OnInit {
  nome: string | null = '';
  email: string | null = '';
  data: string | null = ''; 
  rg: any | null = '';
  cpf: any | null = '';
  sexo: string | null = '';
  usuario: any;
  constructor(private DatePipe:DatePipe, private http: HttpClient, private datepipe: DatePipe, private route: ActivatedRoute) {}

  ngOnInit(): void 
  {
    this.getInfos();

  }

  getInfos() {

    this.http.get('http://localhost:5019/api/Formulario/UltimoId',).subscribe((data) => {
      this.usuario = data;
      this.nome = this.usuario.nomeCompleto;
      this.email = this.usuario.email;
      this.data = this.datepipe.transform(this.usuario.dataNascimento, 'dd/MM/yyyy');
      this.rg = this.usuario.rg;
      this.cpf = this.usuario.cpf;
      this.sexo = this.usuario.sexo;
    
        console.log(data);
      });

  }
  onSubmit() {

  }
}
