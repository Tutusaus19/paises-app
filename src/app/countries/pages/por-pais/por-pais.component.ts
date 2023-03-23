import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {
   termino: string = '';
   hayError: boolean = false;
   countries: Country[] = []


   constructor(private countriesService : CountriesService ){}
   buscar(termino:string){
    this.termino = termino;

    this.countriesService.buscarPais(termino)
    .subscribe((res) => {
      this.hayError = false;
      this.countries = res;
      console.log(res);
    }, (err)=>{
      this.hayError = true;
      this.countries = []

    });
   }

   sugerencias(termino: string){
    this.hayError = false;
    //TODO: crear sugerencias
   }

}
