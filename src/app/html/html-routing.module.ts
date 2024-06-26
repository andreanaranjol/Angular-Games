import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HtmlComponent } from './html.component';

const routes: Routes = [
  { path: '', component: HtmlComponent },
  { path: 'forms/form-inputs', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlRoutingModule {}
