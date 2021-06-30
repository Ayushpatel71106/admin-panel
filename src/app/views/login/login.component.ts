import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule } from "@angular/forms";
import { AuthenticationService } from "../../shared/services/authentication.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent {
  formdata: FormGroup;
  constructor(private _authenticationservice: AuthenticationService) {
    this.formdata = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
    });
  }
  submit() {
    this._authenticationservice
      .signin(this.formdata.value)
      .subscribe((response) => {});
  }
}
