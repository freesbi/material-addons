import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'mad-icon-button',
  templateUrl: './icon-button.component.html',
  imports: [MatButtonModule, MatTooltip],
})
export class IconButtonComponent {
  type = input<HTMLButtonElement['type']>();
  disabled = input<boolean>();
  title = input<string>();
}
