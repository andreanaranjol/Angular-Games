import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { PackageService } from 'src/app/services/package.service';
import { Exercise } from 'src/app/types/package';
import { Runtime } from 'src/app/types/runtime';
import sort, { input as sortInput } from '../exercises/sort';
import sum, { input as sumInput } from '../exercises/sum';
import filterFn, { input as filterInput } from '../exercises/filter';
import sortWithoutSort, {
  input as sortWithoutSortInput,
} from '../exercises/sort-without-sort';
import eqIndex, { input as eqIndexInput } from '../exercises/eq-index';

@Component({
  selector: 'app-runtime',
  templateUrl: './runtime.component.html',
  styleUrls: ['./runtime.component.css'],
})
export class RuntimeComponent implements OnInit {
  exercise?: Exercise;
  runtime: Record<string, Runtime> = {
    sort: {
      fn: sort,
      input: sortInput,
    },
    sum: {
      fn: sum,
      input: sumInput,
    },
    filter: {
      fn: filterFn,
      input: filterInput,
    },
    'sort-without-sort': {
      fn: sortWithoutSort,
      input: sortWithoutSortInput,
    },
    'eq-index': {
      fn: eqIndex,
      input: eqIndexInput,
    },
  };
  input?: string;
  output?: string;

  constructor(
    private route: ActivatedRoute,
    private packageService: PackageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.packageService.getExercise(
            'javascript',
            params.get('examId')!,
            params.get('exerciseId')!
          )
        )
      )
      .subscribe((exercise) => {
        this.exercise = exercise;
        this.initExercise();
      });
  }

  initExercise() {
    if (this.exercise) {
      const runtime = this.runtime[this.exercise.id];
      this.input = JSON.stringify(runtime.input, null, 2);
      const outcome = runtime.fn(runtime.input);
      if (outcome) {
        this.output = JSON.stringify(outcome, null, 2);
      }
    }
  }
}
