import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaComponent, Livro } from '../lista/lista.component';
import { LivrobackService } from '../livroback.service';

@Component({
  selector: 'app-modalexcluir',
  templateUrl: './modalexcluir.component.html',
  styleUrls: ['./modalexcluir.component.css']
})
export class ModalexcluirComponent implements OnInit {
  livro: any = {}

  constructor(private guardaservice: LivrobackService, public dialogRef: MatDialogRef<ListaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Livro,) { }

  ngOnInit(): void {
    this.livro = this.data
  }
  excluirLivro() {
    this.guardaservice.excluirLivro(this.livro).subscribe(retonodoback => {
      console.log(retonodoback)
      this.dialogRef.close()
    })

  }

}
