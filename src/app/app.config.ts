import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ConfirmacaoEnvioComponent } from './confirmacao-envio/confirmacao-envio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),
    provideRouter([
      { path: '', component: FormularioComponent },
      { path: 'confirmar', component: ConfirmacaoEnvioComponent },
    ])
  ]
};
