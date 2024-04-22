import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
export interface Response {
  code: string;
  message: string;
  type: string;
  data?: {
    [key: string]: any;
  };
}

export interface JobInformation {
  JobID: number;
  Title: string;
  Description: string;
  Company: string;
  Location: string;
  Category: string;
  EmploymentType: string;
  Salary: string;
  Requirements: string;
  Responsibilities: string;
  PostedDate: string;
  ExpiryDate: string;
  ContactEmail: string;
  ContactPhone: string;
  IsActive: boolean;
}

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<Response>(
      "http://hcp.enterskull.com:9002/admin/login",
      {
        email,
        password,
      }
    );
  }

  adminSignUp(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    designation: string,
    specialty: string,
    phone: string
  ) {
    return this.http.post<Response>(
      "http://hcp.enterskull.com:9002/admin/register",
      {
        firstName,
        lastName,
        email,
        password,
        designation,
        specialty,
        phone,
      }
    );
  }
  postJob(
    Title: string,
    Description: string,
    Company: string,
    Location: string,
    Category: string,
    EmploymentType: string,
    Salary: number,
    Requirements: string,
    Responsibilities: string,
    PostedDate: string,
    ExpiryDate: string,
    ContactEmail: string,
    ContactPhone: string,
    IsActive: boolean
  ) {
    return this.http.post<Response>(
      "http://hcp.enterskull.com:9002/admin/post-job",
      {
        Title,
        Description,
        Company,
        Location,
        Category,
        EmploymentType,
        Salary,
        Requirements,
        Responsibilities,
        PostedDate,
        ExpiryDate,
        ContactEmail,
        ContactPhone,
        IsActive,
      }
    );
  }
  updateJob(
    Title: string,
    Description: string,
    Company: string,
    Location: string,
    Category: string,
    EmploymentType: string,
    Salary: number,
    Requirements: string,
    Responsibilities: string,
    PostedDate: string,
    ExpiryDate: string,
    ContactEmail: string,
    ContactPhone: string,
    IsActive: boolean
  ) {
    return this.http.patch<Response>(
      "http://hcp.enterskull.com:9002/admin/post-job",
      {
        Title,
        Description,
        Company,
        Location,
        Category,
        EmploymentType,
        Salary,
        Requirements,
        Responsibilities,
        PostedDate,
        ExpiryDate,
        ContactEmail,
        ContactPhone,
        IsActive,
      }
    );
  }
  getAllJobs() {
    return this.http.get(`http://hcp.enterskull.com:9002/admin/job`);
  }

  deleteJob(id: string) {
    return this.http.delete<Response>(
      `http://hcp.enterskull.com:9002/admin/job/${id}`
    );
  }
}
