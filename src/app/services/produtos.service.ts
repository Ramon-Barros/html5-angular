import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../interfaces/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  carregando = true;
  produtos: Produto[] = [];

  constructor( private http: HttpClient ) {

    this.carregarProdutos();

   }

  private carregarProdutos() {
    this.http.get('https://angular-html-5ebae.firebaseio.com/produtos_idx.json')
    .subscribe( (resp: Produto[]) => {
         console.log(resp);
        this.produtos = resp;
         this.carregando = false;

       });
   }
}
