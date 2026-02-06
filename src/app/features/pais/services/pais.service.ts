import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisRow } from '../pages/pais-list/pais-list';

@Injectable({ providedIn: 'root' })
export class PaisService {
  // Ajusta tu baseUrl real
  private baseUrl = 'https://localhost:5001/api/pais';

  constructor(private http: HttpClient) {}

  listar(): Observable<PaisRow[]> {
    return this.http.get<PaisRow[]>(`${this.baseUrl}`);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
