import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signForm = this.formBuilder.group({
    name: '',
    email: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.signUpService.signUp(this.signForm.value);
  }
}
