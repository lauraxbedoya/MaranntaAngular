import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import storage, { AUTH_TOKEN } from "src/utils/storage";
import { ResultType, StockType } from "src/utils/types";

const API_URL = 'http://localhost:3010/';

@Injectable({
  providedIn: 'root'
})

export class StockService {
  constructor(
    private http: HttpClient
  ) { }

  baseUrl = `${API_URL}stock`;

  headers: HttpHeaders = new HttpHeaders()
    // .set('authorization', `Bearer ${storage.get(AUTH_TOKEN)}`)
    .set('content-type', 'application/json')

  async getStock() {
    return this.http.get<StockType[]>(`${this.baseUrl}`, {
      headers: this.headers
    });
  }

  async create(product: StockType) {
    return this.http.post<ResultType>(`${this.baseUrl}`, product, {
      headers: this.headers
    })
  }

  async updateQuantity() {
    return this.http.put<StockType[]>(`${this.baseUrl}/`, {
      headers: this.headers
    })
  }

  async deleteProduct(id: StockType) {
    return this.http.delete<StockType[]>(`${this.baseUrl}/${id}`, {
      headers: this.headers
    })
  }
}