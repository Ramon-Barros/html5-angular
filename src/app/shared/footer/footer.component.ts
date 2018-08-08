import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  ano: number = new Date().getFullYear();
  dia: number = new Date().getUTCDate();
  mes: number = new Date().getMonth() + 1;

  constructor( public infoPaginaService: InfoPaginaService) { }

  ngOnInit() {
  }

}
