import { Component, Input } from '@angular/core';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { Example } from './example.class';
import { ButtonModule } from '../../../../projects/material-addons/src/lib/button/button.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'example-viewer',
  standalone: true,
  imports: [CommonModule, ButtonModule, MatTooltipModule, MatIconModule, MatTabsModule, PortalModule],
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
})
export class ExampleViewerComponent {
  /** String key of the currently displayed example. */
  selectedPortal: ComponentPortal<any>;
  showSource = false;
  tabNames = ['html', 'ts', 'scss'];
  private givenExample: Example;
  private exampleBaseURL = 'app/example-components';

  @Input()
  get example(): Example {
    return this.givenExample;
  }

  set example(example) {
    this.givenExample = example;
    this.selectedPortal = new ComponentPortal(this.givenExample.component);
    for (const tabName of this.tabNames) {
      this.fetchDocument(`${this.exampleBaseURL}/${this.givenExample.url}/${this.givenExample.url}.component.${tabName}`, tabName);
    }
  }

  constructor(private http: HttpClient) {}

  toggleSourceView(): void {
    this.showSource = !this.showSource;
  }

  private fetchDocument(url: string, ending: string): void {
    this.http.get(url, { responseType: 'text' }).subscribe(
      (document) => this.givenExample.setFile(document, ending),
      (error) => {
        console.error(error);
        this.givenExample.setFile(`/** No ${ending.toUpperCase()} for this example */`, ending)
      },
    );
  }
}
