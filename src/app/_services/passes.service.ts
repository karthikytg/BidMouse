import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassesService {

    host = 'http://localhost:3001/api';
    constructor(private http: HttpClient) { }
  
    addPasses(data: any) {
        return this.http.post<{message: any}>(`${this.host}/pass/add-pass`, data);
    }
    updatePass(data: any) {
        return this.http.put<{message: any}>(`${this.host}/pass/up-pass`, data);
    }
    aodPass(data: any) {
        return this.http.put<{message: any}>(`${this.host}/pass/act-pass`, data);
    }
    uploadPass(data: any, inc: any) {
        return this.http.post<{message: any, path: any}>(`${this.host}/pass/file-upload${inc}`, data);
    }
    getPasses() {
        return this.http.get<{rows: any, count: any}>(`${this.host}/pass/get-passes`);
    }
    getPassesById(id: any) {
        return this.http.get<{rows: any}>(`${this.host}/pass/get-pass-id/${id}`);
    }
    deletePassById(id: any) {
        return this.http.get<{message: any}>(`${this.host}/pass/del-pass/${id}`);
    }
}
