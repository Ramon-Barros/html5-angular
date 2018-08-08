import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';
import { ProdutoDescricao } from '../../interfaces/produto-descricao.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  produto: ProdutoDescricao;
  id: string;
  dia: number = new Date().getUTCDate();
  ano: number = new Date().getFullYear();
  mes: number = new Date().getMonth() + 1;

  constructor( private route: ActivatedRoute,
              public produtoServive: ProdutosService) { }

  ngOnInit() {

    this.route.params.subscribe( parametros => {
      // console.log(paramentros['id']);
      this.produtoServive.getProduto(parametros['id'])
        .subscribe( (produto: ProdutoDescricao) => {
          this.id = parametros['id'];
          this.produto = produto;
        });
    });
  }

}
