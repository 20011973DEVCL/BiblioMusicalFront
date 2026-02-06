import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisRow } from '../pages/pais-list/pais-list';
import { environment } from '../../../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class PaisService {
  private readonly baseUrl = `${environment.apiUrl}/api/pais`;

  constructor(private http: HttpClient) {}

  listar(): Observable<PaisRow[]> {
    return this.http.get<PaisRow[]>(`${this.baseUrl}/Listar`);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
