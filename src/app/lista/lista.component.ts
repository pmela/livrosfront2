import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LivrobackService } from '../livroback.service';
import { ModaladdComponent } from '../modaladd/modaladd.component';

export interface Livro {
  id: number;
  nome: string;
  autor: string;
  categoria: string;
  descricao: string;

}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'autor','categoria', 'conf'];
  lista = [];

  constructor(
    private rota: Router,
    private service: LivrobackService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listaLivro()
  }

  listaLivro(){
    this.service.listalivro().subscribe(
      (listadldoback:any)=> {
        this.lista=listadldoback
      }
    )
  }
  abrirModal(livro?:Livro){
    let meumodal = this.dialog.open(ModaladdComponent, {
      width: '40em', data:livro
    });
    meumodal.afterClosed().subscribe((resultado) => {
      this.listaLivro()
    })
  }
}

