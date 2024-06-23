import { Component } from '@angular/core';
import { TogglesComponent } from './toggles/toggles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TogglesComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {};
