import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageRoutingModule } from './package-routing.module';
import { PackageComponent } from './package.component';
import { ComponentsModule } from '../components/components.module';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExamComponent } from './exam/exam.component';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  declarations: [PackageComponent, QuizComponent, QuestionComponent, ExamComponent, ExerciseComponent],
  imports: [
    CommonModule,
    PackageRoutingModule,
    HttpClientModule,
    ComponentsModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
})
export class PackageModule {}
