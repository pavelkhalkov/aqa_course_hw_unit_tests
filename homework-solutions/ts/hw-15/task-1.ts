interface IEmployee {
  name: string;
  salary: number;
  isManager: boolean;
}

const QA: IEmployee = {
  name: 'Mike',
  salary: 3000,
  isManager: false,
};

type EmployeeKeys = keyof IEmployee;
type QaKeys = keyof typeof QA;
type UserType = typeof QA;

type EmployeePartial = Partial<IEmployee>;
type EmployeeNameSalary = Pick<IEmployee, 'name' | 'salary'>;
type EmployeeWithoutManager = Omit<IEmployee, 'isManager'>;
type EmployeeReadonly = Readonly<IEmployee>;

const obj: Record<string, keyof typeof QA> = {
  id1: 'name',
  id2: 'salary',
  id3: 'isManager',
};