import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-name',
  standalone: true,
  imports: [],
  templateUrl: './toggle-name.component.html',
})
export class ToggleNameComponent {
  @Input({ required: true }) appName!: string;
  @Input({ required: true }) toggleName!: string;
}
