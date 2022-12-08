import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaComponent, Livro } from '../lista/lista.component';
import { LivrobackService } from '../livroback.service';

@Component({
  selector: 'app-modaladd',
  templateUrl: './modaladd.component.html',
  styleUrls: ['./modaladd.component.css']
})
export class ModaladdComponent implements OnInit {

  livro: any = {}

  constructor(private livroservice: LivrobackService, public dialogRef: MatDialogRef<ListaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Livro,
  ) { }

  ngOnInit(): void {
    if (this.data.id != undefined) {
      this.livro = this.data
    }

  }

  salvaLivro() {
    if (this.data.id != undefined) {
      this.livroservice.alteraLivro(this.livro).subscribe(retornodoback => {
        console.log(retornodoback)
        this.dialogRef.close();

      })
    } else (
      this.livroservice.salvaLivro(this.livro).subscribe(retornodoback => {
        console.log(retornodoback)
        this.dialogRef.close();
      })
    )

  }


}
