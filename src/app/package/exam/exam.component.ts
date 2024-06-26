import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { PackageService } from 'src/app/services/package.service';
import { Breadcrumb } from 'src/app/types/breadcrumb';
import { Exam } from 'src/app/types/package';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent implements OnInit {
  breadcrumbs?: Breadcrumb[];
  exam?: Exam;

  constructor(
    private route: ActivatedRoute,
    private packageService: PackageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.packageService.getExam(
            params.get('packageId')!,
            params.get('examId')!
          )
        )
      )
      .subscribe((exam) => {
        this.exam = exam;
        this.breadcrumbs = [
          {
            label: exam?.package?.name ?? '',
            url: `/package/${exam?.package?.id ?? ''}`,
          },
          {
            label: `Ejercicio: ${exam?.name ?? ''}`,
            url: `/package/${exam?.package?.id ?? ''}/${exam?.id ?? ''}`,
          },
        ];
      });
  }
}
