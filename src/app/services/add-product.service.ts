import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  private apiUrl = 'http://localhost:3000/products'; 
  constructor(private http: HttpClient) { }

  addProduct(newProduct: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newProduct);
  }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getProductById(productId: number): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<any>(url);
}
updateProduct(productId: number, updatedProduct: any): Observable<any> {
  const url = `${this.apiUrl}/${productId}`;
  return this.http.put<any>(url, updatedProduct);
}
deleteProduct(productId: number): Observable<any> {
  const url = `${this.apiUrl}/${productId}`;
  return this.http.delete<any>(url);
}
}