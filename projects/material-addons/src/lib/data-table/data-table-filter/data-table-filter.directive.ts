import { Directive, EventEmitter, Output } from '@angular/core';
import { DataTableFilterObject } from './data-table-filter-object';
import { DataTableFilterService } from './service/data-table-filter.service';

@Directive({
  selector: '[madFilter]',
  standalone: true,
})
export class DataTableFilter {
  @Output('madFilterChange') readonly filterChange = new EventEmitter<DataTableFilterObject>();

  constructor(private filterService: DataTableFilterService) {
    this.filterService.filterChange$.subscribe((value) => {
      this.filterChange.emit(value);
    });
  }

  // filterables = new Map<string, DataTableFilterHeader>();

  // register(filterable: DataTableFilterHeader) {
  //   this.filterables.set(filterable.id, filterable);
  // }
  //
  // unregister(filterable: DataTableFilterHeader) {
  //   this.filterables.delete(filterable.id);
  // }

  // changeFilter() {
  //   this.filterChange.emit(this.createFilter());
  // }

  updateFilterables(dataTableFilterObject: DataTableFilterObject | undefined) {
    if (!!dataTableFilterObject) {
      Object.entries(dataTableFilterObject).forEach(([key, value]) => {
        const filterable = this.filterService.getFilterable(key);
        if (!!filterable) {
          filterable.filterValue = value;
        }
      });
    } else {
      // this.filterables.forEach((value) => (value.filterValue = null));
      this.filterService.resetFilterValues();
    }
  }

  // private createFilter(): DataTableFilterObject {
  // return this.filterService.filterValues;
  // return Array.from(this.filterables.values()).reduce((result, current) => ({ ...result, [current.id]: current.filterValue }), {});
  // }
}
