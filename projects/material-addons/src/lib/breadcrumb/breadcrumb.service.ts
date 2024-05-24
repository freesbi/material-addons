import { Injectable } from '@angular/core';
import {BreadcrumbModel} from './breadcrumb-model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<BreadcrumbModel[]>([]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  updateBreadcrumb(breadcrumbs: BreadcrumbModel[]): void {
    this.breadcrumbsSubject.next(breadcrumbs);
  }
}
