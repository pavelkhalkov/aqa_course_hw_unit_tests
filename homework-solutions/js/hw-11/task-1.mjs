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
    if (typeof value !== 'string' || value.length === 0) {
      throw new Error('First name should be a non-empty string')
    } else {
      this._firstName = value;
    }
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string' || value.length === 0) {
      throw new Error('Last name should be a non-empty string')
    } else {
      this._lastName = value;
    }
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || value.length === 0) {
      throw new Error('Profession should be a non-empty string')
    } else {
      this._profession = value;
    }
  }

  #salary;

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Salary should be a positive number')
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
}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);

company.addEmployee(emp1);
company.addEmployee(emp2);

console.log(company.getEmployees());
console.log(company.getInfo());


export { Employee, Company };
