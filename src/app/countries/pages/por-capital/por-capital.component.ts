import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  countries: Country[] = []


  constructor(private countriesService : CountriesService ){}
  buscar(termino:string){
   this.termino = termino;

   this.countriesService.buscarCapital(termino)
   .subscribe((res) => {
     this.hayError = false;
     this.countries = res;
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
