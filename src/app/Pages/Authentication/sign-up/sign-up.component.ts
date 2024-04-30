import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ApiService } from "../../../Services/api.service";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-sign-up",
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./sign-up.component.html",
  styleUrl: "./sign-up.component.scss",
})
export class SignUpComponent {
  hide = true;
  adminRegister: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {
    this.adminRegister = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      phone: new FormControl(""),
      department: new FormControl(""),
      specialty: new FormControl(""),
    });
  }
  onSubmit(form: FormGroupDirective) {
    if (!form.valid) {
      return;
    }

    const lastName = form.value.lastName;
    const firstName = form.value.firstName;
    const email = form.value.email;
    const password = form.value.password;
    const designation = form.value.department;
    const specialty = form.value.specialty;
    const phone = form.value.phone;

    console.log(form.value);

    this.apiService
      .adminSignUp(
        firstName,
        lastName,
        email,
        password,
        designation,
        specialty,
        phone
      )
      .subscribe(
        (resData) => {
          console.log(resData);
          this.router.navigate(["login"]);
        },
        (errorMessage) => {
          console.log(errorMessage);
        }
      );
  }
}
