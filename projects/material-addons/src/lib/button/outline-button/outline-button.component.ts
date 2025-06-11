import { Component, input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'mad-outline-button',
  templateUrl: './outline-button.component.html',
  imports: [MatButtonModule, MatTooltip],
})
export class OutlineButtonComponent {
  type = input<HTMLButtonElement['type']>();
  disabled = input<boolean>();
  title = input<string>('');
  color = input<ThemePalette>('primary');
}
