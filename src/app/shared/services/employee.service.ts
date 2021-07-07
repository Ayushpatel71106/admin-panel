import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../../utils/base-url";
import { Endpoint } from "../../utils/endpoint";
import { IEmployee } from "./IEmployee";
@Injectable({
  providedIn: "root",
})
export class EmployeeService implements IEmployee {
  constructor(private _http: HttpClient) {}
  CreateEmployee(emp: any) {
    return this._http.post(`${BASE_URL}${Endpoint.EMPLOYEE}`, emp);
  }
  GetAllEmployees() {
    return this._http.get(`${BASE_URL}${Endpoint.EMPLOYEE}`);
  }
  GetEmployeeById(id: number) {
    return this._http.get(`${BASE_URL}${Endpoint.EMPLOYEE}/${id}`);
  }
  DeleteEmployee(id: number) {
    return this._http.delete(`${BASE_URL}${Endpoint.EMPLOYEE}/${id}`);
  }
  UpdateEmployee(emp: any) {
    return this._http.put(`${BASE_URL}${Endpoint.EMPLOYEE}`, emp);
  }
}
