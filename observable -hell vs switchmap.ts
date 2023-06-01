import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute, private countriesService:CountriesService) { }

  /* Observable hell */
  ngOnInit(): void {

    this.activateRoute.params
      .subscribe(({id})=> {

         this.countriesService
          .searchCountryByAlphaCode(id).subscribe(
              country =>console.log(country))
              
      });
  }

  /* switchMap */
  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id)),
    )
    .subscribe(country=> {
      if(!country){
        return this.router.navigateByUrl('');
      }
      console.log('tenemos un pais');
      return;
    });

  }
}
