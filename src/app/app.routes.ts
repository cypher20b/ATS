import { Routes } from "@angular/router";
import { AdminDashboardComponent } from "./Pages/Dashboard/admin-dashboard/admin-dashboard.component";
import { AddJobComponent } from "./Pages/Dashboard/admin-dashboard/Components/add-job/add-job.component";
import { ApplicantsListComponent } from "./Pages/Dashboard/admin-dashboard/Components/applicants-list/applicants-list.component";
import { SignUpComponent } from "./Pages/Authentication/sign-up/sign-up.component";

export const routes: Routes = [
  {
    path: "dashboard",
    component: AdminDashboardComponent,
    children: [
      // { path: '', component: MerchantProductsComponent },
      { path: "new-application", component: AddJobComponent },
      { path: "applicants", component: ApplicantsListComponent },
    ],
  },
  { path: "", component: SignUpComponent },
];
