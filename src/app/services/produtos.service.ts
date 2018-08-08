import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../interfaces/produto.interface';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  carregando = true;
  produtos: Produto[] = [];
  produtosFiltrado: Produto[] = [];

  constructor( private http: HttpClient ) {

    this.carregarProdutos();

   }

  private carregarProdutos() {

    return new Promise (( resolve, reject) => {

      this.http.get('https://angular-html-5ebae.firebaseio.com/produtos_idx.json')
      .subscribe( (resp: Produto[]) => {

          this.produtos = resp;
           this.carregando = false;
           resolve();

         });
    });

   }

   getProduto(id: string) {
    return this.http.get(`https://angular-html-5ebae.firebaseio.com/produtos/${ id }.json`);
   }

   buscarProduto( termino: string ) {

    if (this.produtos.length === 0) {
      // carregar os produtos
      this.carregarProdutos().then( () => {
        // aplica depois de ter o produto
        // aplica o filtro
      this.filtrarProdutos( termino );
      });

    } else {
        // aplica o filtro
        this.filtrarProdutos( termino);
    }

   }
   private filtrarProdutos( termino: string ) {
      console.log( this.produtos);
      this.produtosFiltrado = [];
      termino = termino.toLocaleLowerCase();

      this.produtos.forEach( prod => {

        const tituloLower = prod.titulo.toLocaleLowerCase();

        if ( prod.categoria.indexOf( termino) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
          this.produtosFiltrado.push( prod );
        }
      });
   }
}
