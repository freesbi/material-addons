import {TemplateRef} from '@angular/core';

export interface ExpandableCellDefinable {
  getCellTemplate(): TemplateRef<any>;
}
