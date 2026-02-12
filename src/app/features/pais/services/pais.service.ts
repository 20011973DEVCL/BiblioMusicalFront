import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';

export type PaisRow = {
  idPais: number;
  nombre: string;
};

export type PaisCreateUpdate = {
  nombre: string;
};

@Injectable({ providedIn: 'root' })
export class PaisService {
  private readonly baseUrl = `${environment.apiUrl}/api/pais`;

  constructor(private http: HttpClient) {}

  listar(): Observable<PaisRow[]> {
    return this.http.get<PaisRow[]>(`${this.baseUrl}/Listar`);
  }

  crear(payload: PaisCreateUpdate): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/Crear`, payload);
  }

  actualizar(idPais: number, payload: PaisCreateUpdate): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/Actualizar`, { idPais, ...payload });
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/Borrar/${id}`);
  }

  obtener(id: number): Observable<PaisRow> {
    debugger;
    return this.http.get<PaisRow>(`${this.baseUrl}/Obtener/${id}`);
  }
}
