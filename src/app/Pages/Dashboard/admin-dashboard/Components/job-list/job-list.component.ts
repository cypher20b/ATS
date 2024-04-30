import { Component } from "@angular/core";
import { ApiService } from "../../../../../Services/api.service";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { JobInformation, JobList } from "../../../../../Interface/interface";
import { MatPaginatorModule } from "@angular/material/paginator";
import { DatePipe } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { JobDetailsComponent } from "./job-details/job-details.component";
import { MatMenuModule } from "@angular/material/menu";

@Component({
  selector: "app-job-list",
  standalone: true,
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    DatePipe,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
  ],
  templateUrl: "./job-list.component.html",
  styleUrl: "./job-list.component.scss",
})
export class JobListComponent {
  users: any;

  constructor(private apiService: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  displayedColumns: string[] = [
    "checkbox",
    "company",
    "job",
    "status",
    "posted",
    "expiry",
    "details",
  ];
  dataSource = new MatTableDataSource<JobList>();
  selection = new SelectionModel<JobList>(true, []);
  openDialog(e: JobInformation) {
    const dialogRef = this.dialog.open(JobDetailsComponent, {
      data: e,
      width: "800px",
      height: "500px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
    this.apiService.getAllJobs().subscribe((resData: any) => {
      console.log(resData);
      this.dataSource = new MatTableDataSource(resData);
    });
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? "deselect" : "select"} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
  //     row.checkbox + 1
  //   }`;
  // }

  onDelete(JobID: number) {
    this.apiService.deleteJob(JobID).subscribe(
      (resData) => {
        console.log(resData);
      },
      (errorMessage) => {
        console.log(errorMessage);
      }
    );
  }
}
