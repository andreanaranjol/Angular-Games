import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PackageListingComponent } from './package-listing/package-listing.component';
import { PackageComponent } from './package/package.component';
import { TestListingComponent } from './test-listing/test-listing.component';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PackageListingComponent,
    PackageComponent,
    TestListingComponent,
    TestComponent,
    BreadcrumbsComponent,
    ModalComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    PackageListingComponent,
    PackageComponent,
    TestListingComponent,
    TestComponent,
    BreadcrumbsComponent,
    ModalComponent,
  ],
})
export class ComponentsModule {}
