import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
    constructor(
      private activatedRoute: ActivatedRoute,
      private countriesService: CountriesService
      ){}
  ngOnInit(): void{

    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.countriesService.getPaisPorAlpha(id)),
        tap(console.log)
        )
      .subscribe(pais =>{
        this.pais = pais[0];
        console.log(pais);
      })
      // this.activatedRoute.params
      // .subscribe(({id}) =>{
      //   console.log(id);

      //   this.countriesService.getPaisPorAlpha(id)
      //   .subscribe(pais =>{
      //     console.log(pais);
      //   })
      // })
  }
}
