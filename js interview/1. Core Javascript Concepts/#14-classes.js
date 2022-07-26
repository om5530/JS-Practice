// Design a class for employee which takes id and name in during construction of object and has a salary property
// Design a class for manager which is employee and can have department property


class Employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error("Employee id and name are mandatorys")
    }
    this.id = id,
      this.name = name
  }
  setSalary(salary) {
    this.salary = salary
  }
  getId() {
    return this.id
  }
  getName() {
    return this.name
  }

  getSalary() {
    return this.salary
  }
}

class Manager extends Employee {
  setDepartment(name) {
    this.department = name
  }
  getDepartment() {
    return this.department
  }
}

const employee = new Employee(1, 'omkar')
console.log(employee)
employee.setSalary(1000)
console.log(employee.setSalary(1000))
console.log(employee.getSalary())


const manager = new Manager(2,'john')

manager.setDepartment("department")
console.log(manager.getDepartment())
console.log(manager)