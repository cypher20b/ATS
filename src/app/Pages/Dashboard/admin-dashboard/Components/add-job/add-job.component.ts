import { Component } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { ApiService } from "../../../../../Services/api.service";
import { Title } from "@angular/platform-browser";

interface Job {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-add-job",
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    CKEditorModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: "./add-job.component.html",
  styleUrl: "./add-job.component.scss",
})
export class AddJobComponent {
  public Editor = ClassicEditor;
  postJob: FormGroup;

  constructor(private apiService: ApiService) {
    this.postJob = new FormGroup({
      jobTitle: new FormControl("", Validators.required),
      jobCompanyName: new FormControl(""),
      jobDescription: new FormControl(""),
      jobResponsibilities: new FormControl(""),
      jobLocation: new FormControl(""),
      jobCategory: new FormControl(""),
      jobEmploymentType: new FormControl(""),
      jobSalary: new FormControl(""),
      jobPostedDate: new FormControl(""),
      jobExpiryDate: new FormControl(""),
      jobRequirements: new FormControl(""),
      jobContactEmail: new FormControl(""),
      jobContactPhone: new FormControl(""),
      jobActive: new FormControl(""),
    });
  }

  contractType: Job[] = [
    { value: "full-time", viewValue: "Full time" },
    { value: "part-time", viewValue: "Part time" },
    { value: "contract", viewValue: "Contract" },
  ];
  jobType: Job[] = [
    { value: "remote", viewValue: "Remote" },
    { value: "in-person", viewValue: "In-person" },
    { value: "hybrid", viewValue: "Hybrid" },
  ];
  jobLevel: Job[] = [
    { value: "entry", viewValue: "Entry Level" },
    { value: "middle", viewValue: "Mid Senior Level" },
    { value: "senior", viewValue: "Senior Level" },
  ];

  onSubmit(form: FormGroupDirective) {
    if (!form.valid) {
      return;
    }
    const jobData = {
      Title: form.value.jobTitle,
      Description: form.value.jobDescription,
      Company: form.value.jobCompanyName,
      Location: form.value.jobLocation,
      Category: form.value.jobCategory,
      EmploymentType: form.value.jobEmploymentType,
      Salary: form.value.jobSalary,
      Requirements: form.value.jobRequirements,
      Responsibilities: form.value.jobResponsibilities,
      PostedDate: new Date(form.value.jobPostedDate),
      ExpiryDate: new Date(form.value.jobExpiryDate),
      ContactEmail: form.value.jobContactEmail,
      ContactPhone: form.value.jobContactPhone,
      IsActive: form.value.jobActive,
    };

    console.log(form.value);
    console.log(jobData);
    this.apiService.postJob(jobData).subscribe(
      (resData) => {
        console.log(resData);
      },
      (errorMessage) => {
        console.log(errorMessage);
      }
    );
  }
}
