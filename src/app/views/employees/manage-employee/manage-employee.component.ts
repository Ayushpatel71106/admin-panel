import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../../shared/services/employee.service";

@Component({
  selector: "app-manage-employee",
  templateUrl: "./manage-employee.component.html",
  styleUrls: ["./manage-employee.component.scss"],
})
export class ManageEmployeeComponent implements OnInit {
  Employees;
  constructor(private _employee: EmployeeService) {}

  ngOnInit(): void {
    this._employee.GetAllEmployees().subscribe((res: any) => {
      console.log(res);
      this.Employees = res;
    });
  }
}
