import { Component, OnInit } from '@angular/core';
import { MyApiService } from '../my-api.service';

@Component({
  standalone: true,
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  exchangeRates: any;

  constructor(private apiService: MyApiService) { }

  ngOnInit(): void {
    this.fetchExchangeRates();
  }

  fetchExchangeRates() {
    this.apiService.fetchExchangeRates().then((result) => {
      if (result) {
        // Parse the result if it's not null
        this.exchangeRates = JSON.parse(result);
      } else {
        console.error('Received null response from API');
      }
    }).catch((error) => {
      console.error('Error fetching exchange rates:', error);
    });
  }  
}
