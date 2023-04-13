import {EmployeeSalary} from "./EmployeeSalary";

export class Node<T> {
    data: EmployeeSalary;
    next: Node<T> | null = null;
    constructor(data: EmployeeSalary) {
        this.data = data;
    }
    readData(): EmployeeSalary {
        return this.data;
    }
}