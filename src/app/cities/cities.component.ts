import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-cities',
  template: ` 
  
    <li (click)="onCityClicked(city)" 
        [ngClass]="{'alert alert-info': city === selection}">
        {{ city | titlecase}}
    </li>
  `,
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent{
  @Input() city!: string;
  @Input() selection!: string;
  @Output() cityClickedEvent = new EventEmitter<string>();
  onCityClicked(city: string): void{
    this.cityClickedEvent.emit(city);
  }
}
