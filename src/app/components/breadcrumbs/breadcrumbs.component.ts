import { Component, Input, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/types/breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input() breadcrumbs?: Breadcrumb[];

  constructor() {}

  ngOnInit(): void {}
}
