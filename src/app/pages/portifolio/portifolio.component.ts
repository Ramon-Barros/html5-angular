import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  constructor( public produtosService: ProdutosService) { }

  ngOnInit() {
  }

}
