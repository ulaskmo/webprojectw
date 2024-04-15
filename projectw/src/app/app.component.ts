import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExchangeRateComponent, } from './exchange-rate/exchange-rate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExchangeRateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectw';
}
