import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'package/:packageId',
    loadChildren: () =>
      import('./package/package.module').then((m) => m.PackageModule),
  },
  {
    path: 'javascript',
    loadChildren: () =>
      import('./javascript/javascript.module').then((m) => m.JavascriptModule),
  },
  {
    path: 'angular',
    loadChildren: () =>
      import('./angular/angular.module').then((m) => m.AngularModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'html',
    loadChildren: () => import('./html/html.module').then((m) => m.HtmlModule),
  },
  { path: 'css', loadChildren: () => import('./css/css.module').then(m => m.CssModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
