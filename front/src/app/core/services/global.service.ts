import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private urlAPI = environment.API;

  constructor(
    private http: HttpClient
) { }

  /***
   * Método para obtener los países de empleos
   */
  getAllCountry(): Observable<object> {
    return this.http.get(this.urlAPI + '/country');
  }

  /***
   * Método para obtener las áreas de la empresa
   */
   getAllArea(): Observable<object> {
    return this.http.get(this.urlAPI + '/area');
  }

  /***
   * Método para obtener los tipos de ID
   */
   getAllTypeID(): Observable<object> {
    return this.http.get(this.urlAPI + '/type-id');
  }

}
