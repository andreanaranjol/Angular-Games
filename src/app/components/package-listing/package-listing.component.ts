import { Component, Input, OnInit } from '@angular/core';
import { Package } from 'src/app/types/package';

@Component({
  selector: 'app-package-listing',
  templateUrl: './package-listing.component.html',
  styleUrls: ['./package-listing.component.css'],
})
export class PackageListingComponent implements OnInit {
  @Input() data?: Package[];

  constructor() {}

  ngOnInit(): void {}
}
