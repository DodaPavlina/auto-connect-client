import { RegisterServiceService } from '../../service/register-service.service.spec';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private RegisterServiceService: RegisterServiceService) { // Fix service name in constructor
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.RegisterServiceService.registerUser(this.registrationForm.value) // Fix service method call
        .subscribe(
          (response: any) => {
            console.log('Registration successful', response);
            // Reset the form after successful registration
            this.registrationForm.reset();
          },
          (error: any) => {
            console.error('Registration failed', error);
          }
        );
    }
  }
}
