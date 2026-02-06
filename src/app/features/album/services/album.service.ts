import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private readonly baseUrl = `${environment.apiUrl}/api/album`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Album[]> {
    return this.http.get<Album[]>(this.baseUrl);
  }

  obtener(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/${id}`);
  }

  crear(payload: Partial<Album>): Observable<Album> {
    return this.http.post<Album>(this.baseUrl, payload);
  }

  actualizar(id: number, payload: Partial<Album>): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, payload);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
