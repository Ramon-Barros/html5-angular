import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipe: any[] = [];

  constructor( private http: HttpClient) {

     this.carregarInfo();
     this.carregarEquipe();
   }

   private carregarInfo() {

     // ler aquivo Json
     this.http.get('assets/data/data-pagina.json')
     .subscribe( (resp: InfoPagina) => {

       this.cargada = true;
       this.info = resp;


     });
   }

   private carregarEquipe() {

    this.http.get('https://angular-html-5ebae.firebaseio.com/equipe.json')
    .subscribe( (resp: any[]) => {
      this.equipe = resp;
      // console.log(resp);

    });

   }
}
