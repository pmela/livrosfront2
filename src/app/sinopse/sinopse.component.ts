import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinopse',
  templateUrl: './sinopse.component.html',
  styleUrls: ['./sinopse.component.css']
})
export class SinopseComponent implements OnInit {
  livro: any = {}
  constructor() { }

  ngOnInit(): void {
  }

}
