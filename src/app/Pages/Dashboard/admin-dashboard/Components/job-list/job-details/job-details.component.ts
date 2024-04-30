import { Component, Inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogContent,
  MatDialogTitle,
  MatDialogActions,
  MatDialogClose,
} from "@angular/material/dialog";
import { JobInformation } from "../../../../../../Interface/interface";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-job-details",
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatDialogClose,
  ],
  templateUrl: "./job-details.component.html",
  styleUrl: "./job-details.component.scss",
})
export class JobDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: JobInformation) {}
}
