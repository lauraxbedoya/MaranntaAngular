import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class UploadService {

  constructor(
    private _http: HttpClient
  ) {}

  uploadImage(vals: any): Observable<any> {
    let data = vals;

    return this._http.post(
      'https://api.cloudinary.com/v1_1/dream-solutions/image/upload/',
      data
    )
  }
}