import { Component } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import {
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

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
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: "./add-job.component.html",
  styleUrl: "./add-job.component.scss",
})
export class AddJobComponent {
  public Editor = ClassicEditor;
  postJob: FormGroup;

  constructor() {
    this.postJob = new FormGroup({});
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

  onSubmit(form: FormGroupDirective) {}
}
