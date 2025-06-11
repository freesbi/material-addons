import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'mad-danger-button',
  templateUrl: './danger-button.component.html',
  imports: [MatButtonModule, MatTooltip],
})
export class DangerButtonComponent {
  type = input<HTMLButtonElement['type']>();
  disabled = input<boolean>();
  title = input<string>();
}
