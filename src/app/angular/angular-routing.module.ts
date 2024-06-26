import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';
import { EchoComponent } from './echo/echo.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameListingComponent } from './game-listing/game-listing.component';
import { GameNewComponent } from './game-new/game-new.component';
import { ListComponent } from './list/list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  { path: '', component: AngularComponent },
  { path: 'junior/echo', component: EchoComponent },
  { path: 'junior/list', component: ListComponent },
  { path: 'mid-level/sign-up', component: SignUpComponent },
  { path: 'mid-level/thanks', component: ThanksComponent },
  { path: 'senior/games', component: GameListingComponent },
  { path: 'senior/games/new', component: GameNewComponent },
  { path: 'senior/games/:gameId', component: GameDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {}
