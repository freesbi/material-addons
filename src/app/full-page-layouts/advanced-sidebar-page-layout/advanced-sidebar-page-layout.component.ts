import { Component } from '@angular/core';
import { BreadcrumbService, BreadcrumbModel } from 'material-addons';

@Component({
  selector: 'app-advanced-sidebar-page-layout',
  templateUrl: './advanced-sidebar-page-layout.component.html',
  styleUrl: './advanced-sidebar-page-layout.component.scss',
})
export class AdvancedSidebarPageLayoutComponent {
  // TODO tmp
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    const breadcrumbs: BreadcrumbModel[] = [
      { label: 'Home', url: '/' },
      { label: 'Parent', url: '/parent' },
      { label: 'Current Page', url: '/current' },
    ];
    this.breadcrumbService.updateBreadcrumb(breadcrumbs);
  }
}
