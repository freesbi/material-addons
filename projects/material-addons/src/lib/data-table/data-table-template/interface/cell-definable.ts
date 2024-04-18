import {TemplateRef} from '@angular/core';

export interface CellDefinable {
  getCellTemplate(): TemplateRef<any>;
}
