import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  Artigo as IArtigo,
} from '@cefwm-angular/common';

@Injectable({
  providedIn: 'root',
})
export class ArtigoEdicaoService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  public get(id: number): Observable<IArtigo> {
    return this.httpClient.get<IArtigo>(
      `/api/artigos/${id}`,
    );
  }

  public put(artigo: IArtigo): Observable<string> {
    return this.httpClient.put<string>(
      `/api/artigos/${artigo._id}`,
      artigo,
    );
  }

}
