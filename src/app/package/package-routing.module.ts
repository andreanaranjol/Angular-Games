import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { PackageComponent } from './package.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: PackageComponent },
  { path: 'quiz/:quizId', component: QuizComponent },
  { path: 'exam/:examId', component: ExamComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackageRoutingModule {}
