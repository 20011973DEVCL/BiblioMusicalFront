import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Canciones {
  private readonly resourceUrl = `${environment.apiUrl}/api/canciones`;

}
