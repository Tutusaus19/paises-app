import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {
   termino: string = '';
   hayError: boolean = false;
   paises: Country[] = [];

   paisesSugeridos: Country[] = [];
   mostrarSugerencias: boolean = false;


   constructor(private countriesService : CountriesService ){}
   buscar(termino:string){
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.hayError = false;

    this.countriesService.buscarPais(termino)
    .subscribe((res) => {
      this.paises = res;
      console.log(res);
    }, (err)=>{
      this.hayError = true;
      this.paises = []

    });
   }

   sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.countriesService.buscarPais(termino)
    .subscribe(countries =>
        this.paisesSugeridos = countries.splice(0,5),
        (err) => this.paisesSugeridos = []

      );
   }
   buscarSugerido(termino: string){
      this.buscar(termino);

   }

}
