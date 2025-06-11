import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'mad-primary-button',
  templateUrl: './primary-button.component.html',
  imports: [MatButtonModule, MatTooltip],
})
export class PrimaryButtonComponent {
  type = input<HTMLButtonElement['type']>();
  disabled = input<boolean>();
  title = input<string>('');
}
