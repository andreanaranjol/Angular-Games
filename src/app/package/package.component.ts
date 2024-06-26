import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { PackageService } from '../services/package.service';
import { Breadcrumb } from '../types/breadcrumb';
import { Package } from '../types/package';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css'],
})
export class PackageComponent implements OnInit {
  url?: string;
  package?: Package;
  breadcrumbs?: Breadcrumb[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private packageService: PackageService
  ) {}

  ngOnInit(): void {
    this.url = this.router.url;
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.packageService.getPackage(params.get('packageId')!)
        )
      )
      .subscribe((p) => {
        this.package = p;
        if (this.package) {
          this.breadcrumbs = [
            { url: `/${this.package.id}`, label: this.package.name },
          ];
        }
      });
  }
}
