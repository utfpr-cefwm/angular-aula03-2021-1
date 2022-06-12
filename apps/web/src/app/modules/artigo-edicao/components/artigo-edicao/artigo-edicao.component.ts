import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'cefwm-angular-artigo-edicao',
  templateUrl: './artigo-edicao.component.html',
  styleUrls: ['./artigo-edicao.component.css'],
})
export class ArtigoEdicaoComponent implements OnInit {

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
    titulo: this.titulo,
    descricao: this.descricao,
    urlImagem: this.urlImagem,
    urlArtigo: this.urlArtigo,
  });

  constructor(
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('O título é:', this.titulo.value);
      this.formGroup.setValue({
        titulo: 'Temporizador acionado, ...',
        descricao: '...portanto as strings...',
        urlImagem: '...foram...',
        urlArtigo: '...alteradas.',
      });
    }, 5000);
  }

  public enviarForm(json: unknown) {
    console.log('Bora enviar', json);
  }

}
