import { Component, Input, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { Question } from 'src/app/types/package';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  @Input() packageId?: string;
  @Input() question?: Question;
  @Input() questionNumber: number = 0;
  alphabet: string[] = [...'abcdefghijklmnopqrstuvwxyz'];

  constructor() {}

  ngOnInit(): void {}
}
