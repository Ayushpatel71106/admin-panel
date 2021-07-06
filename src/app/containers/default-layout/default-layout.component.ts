import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../shared/services/authentication.service";
import { navItems } from "../../_nav";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  userInfo: any;
  constructor(
    private _router: Router,
    private _autho_service: AuthenticationService
  ) {
    this.userInfo = this._autho_service.GetSavedUser();
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  Logout() {
    this._router.navigate(["/login"]);
  }
}
