import { Injectable } from '@angular/core';
import { DataTableFilterObject } from '../data-table-filter-object';
import { BehaviorSubject } from 'rxjs';

export interface Filterable {
  id: string;
  filterValue: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class DataTableFilterService {
  private filterables = new Map<string, Filterable>();

  // New behavior subject
  private filterChangeSubject = new BehaviorSubject<DataTableFilterObject | undefined>(undefined);

  // Expose the observable$
  filterChange$ = this.filterChangeSubject.asObservable();

  register(filterable: Filterable) {
    this.filterables.set(filterable.id, filterable);
  }

  unregister(filterable: Filterable) {
    this.filterables.delete(filterable.id);
  }

  changeFilter() {
    this.filterChangeSubject.next(this.filterValues);
  }

  get filterValues(): DataTableFilterObject {
    return Array.from(this.filterables.values()).reduce(
      (result, current) => ({
        ...result,
        [current.id]: current.filterValue,
      }),
      {},
    );
  }

  getFilterable(filterId: string): Filterable | undefined {
    return this.filterables.get(filterId);
  }

  resetFilterValues(): void {
    this.filterables.forEach((value) => {
      value.filterValue = null;
    });
  }
}
