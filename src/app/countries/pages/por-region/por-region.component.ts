import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[`
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

    regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
    regionActiva: string = '';
    countries: Country[] = [];

  constructor(private countriesService: CountriesService){}

  activarRegion(region:string){
    if(region === this.regionActiva ){return}
      this.regionActiva = region;
      console.log(region)
      //Llamada al sercicio

      this.countriesService.buscarRegion(region)
      .subscribe((res)=>{
        this.countries = res;
      })
  }

}
