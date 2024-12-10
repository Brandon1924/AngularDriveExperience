import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/api/datos'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para obtener los datos del backend
  getDatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}