import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cities = ['Barcelona', 'Madrid', 'Lima', 'Quito']
  name!: string;
  selection!: string;
  criteria = ''
  addNewCity(city: string): void {
    this.cities.push(city);
  }
  onCityClicked(city: string): void {
    console.log('City ->', city);
    this.selection = city;
  }
  onClear():void {
    this.selection = '';
  }
  
}
