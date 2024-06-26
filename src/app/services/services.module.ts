import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageService } from './package.service';
import { SignUpService } from './sign-up.service';

@NgModule({
  declarations: [],
  providers: [PackageService, SignUpService],
  imports: [CommonModule],
})
export class ServicesModule {}
