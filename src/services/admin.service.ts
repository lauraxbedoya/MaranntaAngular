import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import storage, { AUTH_TOKEN } from "src/utils/storage";
import { AdminType } from "src/utils/types";

const API_URL = 'http://localhost:3010/';

type MeType = {
  user: AdminType
};

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  baseUrl = `${API_URL}admin`;
  headers: HttpHeaders = new HttpHeaders()
    .set('authorization', `Bearer ${storage.get(AUTH_TOKEN)}`)
    .set('content-type', 'application/json')
  
  constructor(
    private http: HttpClient
  ) {}

  async getUser() {
    return this.http.get<MeType>(`${this.baseUrl}/me`, {
      headers: this.headers
    })
  }
}