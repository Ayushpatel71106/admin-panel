import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../../utils/base-url";
import { Endpoint } from "../../utils/endpoint";
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private _http: HttpClient) {}
  signin(user) {
    return this._http.post(`${BASE_URL}${Endpoint.LOGIN}`, user);
  }
  signup(user) {
    return this._http.post(`${BASE_URL}${Endpoint.SIGNUP}`, user);
  }
}
