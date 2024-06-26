import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './javascript.component';
import { RuntimeComponent } from './runtime/runtime.component';

const routes: Routes = [
  { path: '', component: JavascriptComponent },
  { path: ':examId/:exerciseId', component: RuntimeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavascriptRoutingModule {}
