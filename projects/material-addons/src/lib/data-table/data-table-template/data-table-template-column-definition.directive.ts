import { Directive, Input } from '@angular/core';
import { CellDefinable } from './interface/cell-definable';

@Directive({
  selector: '[madColumnDef]',
  standalone: true,
})
export class DataTableTemplateColumnDefinition {
  @Input()
  madColumnDef: string;

  cellDef: CellDefinable | null;

  public register(cellDef: CellDefinable) {
    this.cellDef = cellDef;
  }

  public unregister() {
    this.cellDef = null;
  }
}
