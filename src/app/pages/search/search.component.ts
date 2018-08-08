import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
              public produtoService: ProdutosService) { }

  ngOnInit() {

    this.route.params
      .subscribe( params => {
        console.log(params['termino']);
        this.produtoService.buscarProduto( params['termino']);
    });
  }

}
