import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'src/app/types/package';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Input() test?: Test;
  @Input() type?: string;
  url?: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.url = this.router.url;
  }
}
