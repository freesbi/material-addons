import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextCodeComponent } from '../../components/text-code/text-code.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { Example } from '../../components/example-viewer/example.class';
import { AlertsComponent } from '../../example-components/alerts/alerts.component';

@Component({
  selector: 'app-alert-demo',
  standalone: true,
  imports: [CommonModule, TextCodeComponent, ExampleViewerComponent],
  templateUrl: './alert-demo.component.html',
  styleUrl: './alert-demo.component.scss',
})
export class AlertDemoComponent {
  alertsComponent = new Example(AlertsComponent, 'alerts', 'Alerts');
}
