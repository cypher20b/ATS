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

export interface JobList {
  checkbox: string;
  company: number;
  job: string;
  status: number;
  posted: string;
  expiry: string;
}
