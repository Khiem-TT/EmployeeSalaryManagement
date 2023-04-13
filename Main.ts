import {EmployeeSalary} from "./EmployeeSalary";
import {EmployeeSalaryManagement} from "./EmployeeSalaryManagement";

let manager = new EmployeeSalaryManagement();
let employeeSalary1 = new EmployeeSalary('January', 1000);
let employeeSalary2 = new EmployeeSalary('February', 1500);
let employeeSalary3 = new EmployeeSalary('March', 2000);
let employeeSalary4 = new EmployeeSalary('April', 2000);

manager.addNode(employeeSalary1);
manager.addNode(employeeSalary2);
manager.addNode(employeeSalary3);
manager.addNode(employeeSalary4);

console.log(manager.showList());
console.log(manager.sumSalary());
console.log(manager.findMonthOfMaxSalary());