import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModel } from './breadcrumb-model';
import { BreadcrumbService } from './breadcrumb.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mad-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumbs: BreadcrumbModel[] = [];
  #subscription: Subscription;

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.#subscription = this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });
  }

  ngOnDestroy() {
    this.#subscription.unsubscribe();
  }
}
