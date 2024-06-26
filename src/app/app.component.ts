import { Component, OnInit } from '@angular/core';
import { SignUpService } from './services/sign-up.service';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  user: User | null = null;

  constructor(private signUpService: SignUpService) {}

  ngOnInit(): void {
    this.signUpService.getUser().subscribe((user) => (this.user = user));
  }
}
