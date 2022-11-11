import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from './lista/lista.component'; 


@Injectable({
  providedIn: 'root'
})
export class LivrobackService {

  constructor(private http: HttpClient) { }



  listalivro(){
    return this.http.get('http://127.0.0.1:8000/livros/')
  }

  salvaLivro(livro: Livro){
    return this.http.post('http://127.0.0.1:8000/livros/',livro)
  }


}
