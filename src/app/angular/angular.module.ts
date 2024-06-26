import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { EchoComponent } from './echo/echo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThanksComponent } from './thanks/thanks.component';
import { HttpClientModule } from '@angular/common/http';
import { GameListingComponent } from './game-listing/game-listing.component';
import { GameNewComponent } from './game-new/game-new.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [
    AngularComponent,
    EchoComponent,
    ListComponent,
    SignUpComponent,
    ThanksComponent,
    GameListingComponent,
    GameNewComponent,
    GameDetailComponent,
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AngularModule {}
