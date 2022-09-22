import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import storage, { AUTH_TOKEN } from 'src/utils/storage';
import { UserType } from 'src/utils/types';

const API_URL = 'http://localhost:3010/';

type MeType = {
  user: UserType
};

type LoginType = {
  accessToken: string,
  message: string,
  user: UserType
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = `${API_URL}user`;
  headers: HttpHeaders = new HttpHeaders()
    .set('authorization', `Bearer ${storage.get(AUTH_TOKEN)}`)
    .set('content-type', 'application/json')

  async login( email: string, password: string ) {
    return this.http.post<LoginType>(`${this.baseUrl}/login`, { email, password }, {
      headers: this.headers
    });
  };

  async create( user: UserType ) {
    return this.http.post<UserType>(`${this.baseUrl}/`, {
      user
    }, {
      headers: this.headers
    })
  };

  async getUser() {
    return this.http.get<MeType>(`${this.baseUrl}/me`, {
      headers: this.headers
    });
    //   const resp = await fetch(`${this.baseUrl}/me`, {
    //     method: 'GET',
    //     headers: this.headers
    //   })
    // return await resp.json();
  }
};
