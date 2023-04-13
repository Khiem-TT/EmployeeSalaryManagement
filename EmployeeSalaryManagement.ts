import {Node} from "./Node";
import {EmployeeSalary} from "./EmployeeSalary";

export class EmployeeSalaryManagement<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(data: EmployeeSalary) {
        if (!this.head) {
            let node = new Node(data);
            node.next = this.head;
            this.head = node;
            if (!this.tail) {
                this.tail = node;
            }
        } else {
            let node = new Node(data);
            this.tail.next = node;
            this.tail = node;
        }
    }

    showList(): T[] {
        let listEmployeeSalary = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            listEmployeeSalary.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listEmployeeSalary;
    }

    sumSalary() {
        let currentNode = this.head;
        let sum: number = 0;
        while (currentNode !== null) {
            sum += currentNode.data.money;
            currentNode = currentNode.next;
        }
        return sum;
    }
    findMonthOfMaxSalary() {
        let listMonthOfMaxSalary = [];
        let currentNode = this.head;
        let max = currentNode.data.money;
        while (currentNode !== null) {
            if (currentNode.data.money > max) {
                max = currentNode.data.money;
            }
            currentNode = currentNode.next;
        }
        currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data.money === max) {
                listMonthOfMaxSalary.push(currentNode.data.month);
            }
            currentNode = currentNode.next;
        }
        return listMonthOfMaxSalary;
    }
}