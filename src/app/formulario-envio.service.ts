
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioEnvioService {
  constructor(private http: HttpClient) {}

  adicionarFormulario(formulario: any): Observable<any> {
    const jsonString = JSON.stringify(formulario);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = 'http://localhost:5019/api/Formulario';
    return this.http.post(url,jsonString,{headers})
  }
}
