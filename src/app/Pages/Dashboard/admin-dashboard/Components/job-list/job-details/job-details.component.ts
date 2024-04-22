import { Component, Inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogContent,
  MatDialogTitle,
} from "@angular/material/dialog";
import { JobInformation } from "../../../../../../Interface/interface";

@Component({
  selector: "app-job-details",
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: "./job-details.component.html",
  styleUrl: "./job-details.component.scss",
})
export class JobDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: JobInformation) {}
}
