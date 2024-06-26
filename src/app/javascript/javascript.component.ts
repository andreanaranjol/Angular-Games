import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';
import { Exam } from '../types/package';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
})
export class JavascriptComponent implements OnInit {
  exams?: Exam[];

  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.packageService.getPackage('javascript').subscribe((p) => {
      this.exams = p?.exams;
    });
  }
}
