import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Artigo as IArtigo } from '@cefwm-angular/common';

import { ArtigoService } from '../../services/artigo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cefwm-angular-lista-artigos',
  templateUrl: './lista-artigos.component.html',
  styleUrls: ['./lista-artigos.component.css'],
})
export class ListaArtigosComponent implements OnInit {

  public artigos$: Observable<IArtigo[]> = this.artigoService.getAll();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private artigoService: ArtigoService,
  ) {
  }

  ngOnInit(): void {
  }

  public editar(artigo: IArtigo, event: Event): void {
    this.router.navigate([
      '..',
      'editar-artigo',
      artigo._id,
    ], {
      relativeTo: this.activatedRoute,
    });
    event.preventDefault();
  }

}
