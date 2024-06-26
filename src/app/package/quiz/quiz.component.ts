import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { PackageService } from 'src/app/services/package.service';
import { SignUpService } from 'src/app/services/sign-up.service';
import { Breadcrumb } from 'src/app/types/breadcrumb';
import { Quiz } from 'src/app/types/package';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  user: User | null = null;
  quiz?: Quiz;
  breadcrumbs?: Breadcrumb[];

  constructor(
    private route: ActivatedRoute,
    private packageService: PackageService,
    private signUpService: SignUpService
  ) {}

  ngOnInit(): void {
    this.signUpService.getUser().subscribe((user) => (this.user = user));

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.packageService.getQuiz(
            params.get('packageId')!,
            params.get('quizId')!
          )
        )
      )
      .subscribe((quiz) => {
        this.quiz = quiz;
        this.breadcrumbs = [
          {
            label: quiz?.package?.name ?? '',
            url: `/package/${quiz?.package?.id ?? ''}`,
          },
          {
            label: `Cuestionario: ${quiz?.name ?? ''}`,
            url: `/package/${quiz?.package?.id ?? ''}/${quiz?.id ?? ''}`,
          },
        ];
      });
  }
}
