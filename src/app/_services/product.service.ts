import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    host = 'http://localhost:3001/api';
    constructor(private http: HttpClient) { }
  
    addProduct(data: any) {
        return this.http.post<{message: any}>(`${this.host}/prod/add-prod`, data);
    }
    updateProduct(data: any) {
        return this.http.put<{message: any}>(`${this.host}/prod/up-prod`, data);
    }
    uploadProduct(data: any, inc: any) {
        return this.http.post<{message: any, path: any}>(`${this.host}/prod/file-upload${inc}`, data);
    }
    getProducts() {
        return this.http.get<{rows: any, count: any}>(`${this.host}/prod/get-prods`);
    }
    getProductById(id: any) {
        return this.http.get<{rows: any}>(`${this.host}/prod/get-prod/${id}`);
    }
    deleteProductById(id: any) {
        return this.http.get<{message: any}>(`${this.host}/prod/del-prod/${id}`);
    }
}
