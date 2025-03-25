class Employee {
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    const regex = /^[A-Za-z]{2,50}$/;
    if (typeof value !== 'string' || !regex.test(value)) {
      throw new Error('First name must be a string of 2 to 50 latin letters.');
    } else {
      this._firstName = value;
    }
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    const regex = /^[A-Za-z]{2,50}$/;
    if (typeof value !== 'string' || !regex.test(value)) {
      throw new Error('Last name must be a string of 2 to 50 latin letters.');
    } else {
      this._lastName = value;
    }
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    const regex = /^[A-Za-z ]+$/;
    if (typeof value !== 'string' || !regex.test(value) || value.trim().length === 0) {
      throw new Error('Profession must be a non-empty string of latin letters and spaces.');
    } else {
      this._profession = value;
    }
  }

  #salary;

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0 || value >= 10000) {
      throw new Error('Salary must be a number greater than 0 and less than 10000.');
    } else {
      this.#salary = value;
    }
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Company {
  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }

  #employees;

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('The specialist is not an employee');
    }
  }

  getEmployees() {
    return this.#employees;
  }

  get numberOfEmployees() {
    return this.#employees.length;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.numberOfEmployees}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((emp) => emp.firstName === firstName);

    if (!employee) {
      throw new Error('Employee not found');
    }
    
    return employee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((emp) => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);

    if (index === -1) {
      throw new Error('Employee not found');
    }

    this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((total, employee) => total + employee.salary, 0);
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees());

export { Employee, Company };
