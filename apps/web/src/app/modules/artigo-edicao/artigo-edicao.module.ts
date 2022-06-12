import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';

import { ArtigoEdicaoRoutingModule } from './artigo-edicao-routing.module';
import { ArtigoEdicaoComponent } from './components/artigo-edicao/artigo-edicao.component';

@NgModule({
  declarations: [
    ArtigoEdicaoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArtigoEdicaoRoutingModule,
    InputTextModule,
  ],
})
export class ArtigoEdicaoModule {
}
