import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'mad-button-group',
  template: '<ng-content></ng-content>',
  host: {
    class: 'mad-button-group',
  },
})
export class MadButtonGroupComponent {}
