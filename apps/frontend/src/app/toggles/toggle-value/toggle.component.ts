import { Component, Input } from '@angular/core';
import { trpcClient } from '../../../trpc';

@Component({
  selector: 'app-toggle-value',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html'
})

export class ToggleValueComponent {
  @Input({ required: true }) appName!: string;
  @Input({ required: true }) toggleName!: string;
  @Input({ required: true }) value!: boolean;

  switchToggle() {
    this.value = !this.value;
    trpcClient.updateToggle.query({
      appName: this.appName,
      toggleName: this.toggleName,
      value: this.value
    })
  }
}
