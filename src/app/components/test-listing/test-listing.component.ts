import { Component, Input, OnInit } from '@angular/core';
import { Test } from 'src/app/types/package';

@Component({
  selector: 'app-test-listing',
  templateUrl: './test-listing.component.html',
  styleUrls: ['./test-listing.component.css'],
})
export class TestListingComponent implements OnInit {
  @Input() data?: Test[];
  @Input() type?: string;

  constructor() {}

  ngOnInit(): void {}
}
