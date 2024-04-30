import { Component } from "@angular/core";
import { ApiService } from "../../../../../Services/api.service";
import { JobInformation } from "../../../../../Services/api.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-applicants-list",
  standalone: true,
  imports: [],
  templateUrl: "./applicants-list.component.html",
  styleUrl: "./applicants-list.component.scss",
})
export class ApplicantsListComponent {
  constructor(private apiService: ApiService) {}
}
