import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
export interface Response {
  code: string;
  message: string;
  type: string;
  data?: {
    [key: string]: any;
  };
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
  postJob()
{
  
}}
