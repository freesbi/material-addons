import { Component } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

interface ColorVariant {
  label: string;
  cssClass: string; // background class
}

interface ColorGroup {
  title: string;
  variants: ColorVariant[];
}

@Component({
  selector: 'colors-layout',
  imports: [NgForOf, NgClass],
  templateUrl: './colors-layout.component.html',
  styleUrl: './colors-layout.component.scss',
})
export class ColorsLayoutComponent {
  topText =
    'This shows the colors of common Material Addons components with the updated layout in order to compare them to the default layout.';

  groupsRow1: ColorGroup[] = [
    {
      title: 'Primary',
      variants: [
        { label: 'primary', cssClass: 'bg-primary' },
        { label: 'primary-shade', cssClass: 'bg-primary-shade' },
        { label: 'primary-tint', cssClass: 'bg-primary-tint' },
      ],
    },
    {
      title: 'Info',
      variants: [
        { label: 'info', cssClass: 'bg-info' },
        { label: 'info-shade', cssClass: 'bg-info-shade' },
        { label: 'info-tint', cssClass: 'bg-info-tint' },
      ],
    },
    {
      title: 'Success',
      variants: [
        { label: 'success', cssClass: 'bg-success' },
        { label: 'success-shade', cssClass: 'bg-success-shade' },
        { label: 'success-tint', cssClass: 'bg-success-tint' },
      ],
    },
    {
      title: 'Warning',
      variants: [
        { label: 'warning', cssClass: 'bg-warning' },
        { label: 'warning-shade', cssClass: 'bg-warning-shade' },
        { label: 'warning-dark', cssClass: 'bg-warning-dark' },
        { label: 'warning-tint', cssClass: 'bg-warning-tint' },
      ],
    },
  ];

  groupsRow2: ColorGroup[] = [
    {
      title: 'Danger',
      variants: [
        { label: 'danger', cssClass: 'bg-danger' },
        { label: 'danger-shade', cssClass: 'bg-danger-shade' },
        { label: 'danger-dark', cssClass: 'bg-danger-dark' },
      ],
    },
    {
      title: 'Neutral',
      variants: [
        { label: 'neutral', cssClass: 'bg-neutral' },
        { label: 'neutral-shade', cssClass: 'bg-neutral-shade' },
        { label: 'neutral-tint', cssClass: 'bg-neutral-tint' },
      ],
    },
    {
      title: 'Alt',
      variants: [
        { label: 'alt', cssClass: 'bg-alt' },
        { label: 'alt-shade', cssClass: 'bg-alt-shade' },
        { label: 'alt-tint', cssClass: 'bg-alt-tint' },
      ],
    },
    {
      title: 'Disabled',
      variants: [
        { label: 'disabled', cssClass: 'bg-disabled' },
        { label: 'disabled-shade', cssClass: 'bg-disabled-shade' },
        { label: 'disabled-tint', cssClass: 'bg-disabled-tint' },
      ],
    },
  ];
}
