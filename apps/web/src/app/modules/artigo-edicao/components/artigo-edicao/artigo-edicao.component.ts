import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import {
  map,
  takeUntil,
} from 'rxjs/operators';

import { Artigo as IArtigo } from '@cefwm-angular/common';

import { ArtigoEdicaoService } from '../../services/artigo-edicao.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'cefwm-angular-artigo-edicao',
  templateUrl: './artigo-edicao.component.html',
  styleUrls: ['./artigo-edicao.component.css'],
})
export class ArtigoEdicaoComponent implements OnInit, OnDestroy {

  public titulo: FormControl = new FormControl(
    '',
    Validators.required,
  );
  public descricao: FormControl = new FormControl(
    '',
    Validators.required,
  );
  public urlImagem: FormControl = new FormControl(
    '',
    Validators.required,
  );
  public urlArtigo: FormControl = new FormControl(
    '',
    Validators.required,
  );
  public formGroup: FormGroup = new FormGroup({
    _id: new FormControl(null),
    titulo: this.titulo,
    descricao: this.descricao,
    imagem: this.urlImagem,
    url: this.urlArtigo,
  });

  private subDestruction: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private artigoEdicaoService: ArtigoEdicaoService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map((params: Params) => {
        const artigoId: number = +params['id-artigo'];
        return artigoId;
      }),
      takeUntil(this.subDestruction),
    ).subscribe((id: number) => {
      this.artigoEdicaoService.get(id).pipe(
        takeUntil(this.subDestruction),
      ).subscribe((a: IArtigo) => {
        this.formGroup.setValue(a);
      });
    });
  }

  ngOnDestroy(): void {
    this.subDestruction.next();
    this.subDestruction.complete();
  }

  public enviarForm(json: IArtigo) {
    this.artigoEdicaoService.put(json).subscribe(
    );
  }

}
