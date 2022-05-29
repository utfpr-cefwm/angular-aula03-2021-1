import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtigoEdicaoComponent } from './components/artigo-edicao/artigo-edicao.component';

const routes: Routes = [
  {
    path: ':id-artigo',
    component: ArtigoEdicaoComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ArtigoEdicaoRoutingModule {
}
