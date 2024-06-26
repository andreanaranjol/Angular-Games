import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';
import { Package } from '../types/package';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  packages: Package[] = [];

  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.packageService
      .getPackages()
      .subscribe((packages) => (this.packages = packages));
  }
}
