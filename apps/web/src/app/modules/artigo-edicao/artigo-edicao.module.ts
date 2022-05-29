import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtigoEdicaoRoutingModule } from './artigo-edicao-routing.module';
import { ArtigoEdicaoComponent } from './components/artigo-edicao/artigo-edicao.component';

@NgModule({
  declarations: [
    ArtigoEdicaoComponent,
  ],
  imports: [
    CommonModule,
    ArtigoEdicaoRoutingModule,
  ],
})
export class ArtigoEdicaoModule {
}
