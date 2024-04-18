import { Directive, Input } from '@angular/core';
import {ExpandableCellDefinable} from './interface/expandable-cell-definable';

@Directive({
  selector: '[madExpandableColumnDef]',
  standalone: true,
})
export class DataTableTemplateExpandableColumnDefinition {
  @Input()
  madExpandableColumnDef: string;

  cellDef: ExpandableCellDefinable | null;

  public register(cellDef: ExpandableCellDefinable) {
    this.cellDef = cellDef;
  }

  public unregister() {
    this.cellDef = null;
  }
}
