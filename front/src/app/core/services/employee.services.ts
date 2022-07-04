import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  private urlAPI = environment.API;

  constructor(
    private http: HttpClient
) { }

  /***
   * Método para obtener todos los empleados registrados
   */
  getEmployeeAll(): Observable<object> {
    return this.http.get(this.urlAPI + '/employee');
  }

  /***
   * Método para obtener los datos de un empleado
   * @params id
   */
   getEmployeeById(id: any): Observable<object> {
    return this.http.get(this.urlAPI + '/employee/' + id);
  }

  /***
   * Método que guarda la información de un nuevo empleado
   * @params data
   */
  createEmployee(data: Object = {}) {
    return this.http.post(this.urlAPI + '/employee', data);
  }

  /***
   * Método que guarda la información de un empleado
   * @params data
   */
  updateEmployee(data: Object = {}) {
    return this.http.put(this.urlAPI + '/employee', data);
  }

  /***
   * Método para obtener todos los empleados registrados
   * @params id
   */
  deleteEmployeeById(id: any): Observable<object> {
    return this.http.delete(this.urlAPI + '/employee/' + id);
  }

}
