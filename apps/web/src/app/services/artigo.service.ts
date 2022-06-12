import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Artigo as IArtigo } from '@cefwm-angular/common';

@Injectable({
  providedIn: 'root',
})
export class ArtigoService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  public getAll(): Observable<IArtigo[]> {
    return this.httpClient.get<IArtigo[]>(
      'http://localhost:3333/api/artigos',
    ).pipe(
    );
  }

}
