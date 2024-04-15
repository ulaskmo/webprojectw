import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  async fetchExchangeRates() {
    const url = 'https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates?locale=en-gb&currency=AED';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '316703c9a0msh9cc1be4686c53b6p19ddf2jsn0d803c7aca64',
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

