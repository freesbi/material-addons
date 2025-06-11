import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'mad-link-button',
  templateUrl: './link-button.component.html',
  imports: [MatButtonModule, MatTooltip],
})
export class LinkButtonComponent {
  type = input<HTMLButtonElement['type']>();
  disabled = input<boolean>();
  title = input<string>();
}
