import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { HttpClient, HttpParams, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

export const JSONP_CLIENT_CALLBACK = new InjectionToken('JSONP_CLIENT_CALLBACK');
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  product_apiUrl:string = 'http://localhost:3000/products'; // Replace this with your API endpoint
   gallery_apiUrl:string = 'http://localhost:3000/gallery';

  constructor(
    private http: HttpClient) {

  }
  productData(): Observable<any> {
    return this.http.get<any>(this.product_apiUrl);
  }
  galleryData(): Observable<any> {

    //return this.http.get<any>(this.gallery_apiUrl);
    return this.http.get(this.gallery_apiUrl);
  }
}
