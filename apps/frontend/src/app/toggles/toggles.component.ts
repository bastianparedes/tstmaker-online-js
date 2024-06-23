import { Component, OnInit } from '@angular/core';
import { ToggleValueComponent } from './toggle-value/toggle.component';
import { ToggleNameComponent } from './toggle-name/toggle-name.component';
import { TogglesService } from './toggles.service';

@Component({
  selector: 'app-toggles',
  standalone: true,
  imports: [ToggleNameComponent, ToggleValueComponent],
  templateUrl: './toggles.component.html'
})
export class TogglesComponent implements OnInit {
  constructor(private service: TogglesService) {}

  async ngOnInit() {
    // this.apps = await this.service.getToggles();
  }
}
