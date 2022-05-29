import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Artigo as IArtigo } from '@cefwm-angular/common';

import { ArtigoService } from '../../services/artigo.service';

@Component({
  selector: 'cefwm-angular-lista-artigos',
  templateUrl: './lista-artigos.component.html',
  styleUrls: ['./lista-artigos.component.css'],
})
export class ListaArtigosComponent implements OnInit {

  public artigos$: Observable<IArtigo[]> = this.artigoService.getAll();

  constructor(
    private artigoService: ArtigoService,
  ) {
  }

  ngOnInit(): void {
  }

}
