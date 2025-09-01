class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("First name should be a non-empty string");
    } else {
      this._firstName = value;
    }
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Last name should be a non-empty string");
    } else {
      this._lastName = value;
    }
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Profession name should be a non-empty string");
    } else {
      this._profession = value;
    }
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("salary name should be a non-empty number");
    } else {
      this.#salary = value;
    }
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const emp1 = new Employee("John", "Doe", "Developer", 3000);
console.log(emp1.firstName);
emp1.salary = 3100;
console.log(emp1.salary);

class Company {
  #employees;

  constructor(title, phone, address, employees) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }

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
      throw new Error("Something went wrong");
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.getEmployees().length}`;
  }
}

const company = new Company("Tech Corp", 123456, "Main Street");
const emp3 = new Employee("John", "Doe", "Developer", 3000);
const emp4 = new Employee("Barbara", "Johnson", "QA", 2500);
company.addEmployee(emp3);
company.addEmployee(emp4);
console.log(company.getEmployees()); // [Employee, Employee]

console.log(company.getInfo());


export { Employee, Company };
