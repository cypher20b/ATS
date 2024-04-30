import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-admin-dashboard",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: "./admin-dashboard.component.html",
  styleUrl: "./admin-dashboard.component.scss",
})
export class AdminDashboardComponent {}
