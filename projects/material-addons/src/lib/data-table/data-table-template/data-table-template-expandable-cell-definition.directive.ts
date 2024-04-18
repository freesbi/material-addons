import { Directive, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { DataTableTemplateExpandableColumnDefinition } from './data-table-template-expandable-column-definition.directive';
import { ExpandableCellDefinable } from './interface/expandable-cell-definable';

@Directive({
  selector: '[madExpandableCellDef]',
  standalone: true,
})
export class DataTableTemplateExpandableCellDefinition implements OnInit, OnDestroy, ExpandableCellDefinable {
  constructor(
    private templateRef: TemplateRef<any>,
    public columnDef: DataTableTemplateExpandableColumnDefinition,
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
