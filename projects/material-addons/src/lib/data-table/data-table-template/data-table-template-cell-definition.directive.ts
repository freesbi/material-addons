import { Directive, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { DataTableTemplateColumnDefinition } from './data-table-template-column-definition.directive';
import { CellDefinable } from './interface/cell-definable';

@Directive({
  selector: '[madCellDef]',
  standalone: true,
})
export class DataTableTemplateCellDefinition implements OnInit, OnDestroy, CellDefinable {
  constructor(
    private templateRef: TemplateRef<any>,
    private columnDef: DataTableTemplateColumnDefinition,
  ) {}

  ngOnInit(): void {
    this.columnDef.register(this);
  }

  ngOnDestroy(): void {
    this.columnDef.unregister();
  }

  getCellTemplate(): TemplateRef<any> {
    return this.templateRef;
  }
}
