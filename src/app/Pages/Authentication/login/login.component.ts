import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { Router, RouterModule } from "@angular/router";
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
  ValidationErrors,
  AbstractControl,
  NgForm,
} from "@angular/forms";
import { ApiService } from "../../../Services/api.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  onSubmit(form: FormGroupDirective) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.apiService.login(email, password).subscribe(
      (resData) => {
        this.router.navigate(["dashboard"]);
      },
      (errorMessage) => {
        console.log(errorMessage);
      }
    );

    // form.reset();
  }
}
