import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmacaoEnvioComponent } from './confirmacao-envio/confirmacao-envio.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'confirmar', component: ConfirmacaoEnvioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
