import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/types/package';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  @Input() packageId?: string;
  @Input() examId?: string;
  @Input() exercise?: Exercise;
  @Input() exerciseNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
