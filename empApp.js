class Employee {
    constructor(id, name, address, salary) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.salary = salary;
    }
}

class EmployeeRepo {
    data = [
        new Employee(111, "Shiv", "Pune", 50000),
        new Employee(112, "Sudarshan", "Hyderabad", 55000),
        new Employee(113, "Sachin", "Banglore", 45000),
        new Employee(114, "Sunil", "Mumbai", 60000),
    ];

    addNewEmployee(emp) {
        this.data.push(emp);
    }

    deleteEmplyee(id) {
        const index = this.data.findIndex((emp) => emp.id == id);
        if (index < 0)
            throw "No Employee is found with matching ID"
        this.data.splice(index, 1);
    }

    getAllEmployees() {
        return this.data;
    }

    getEmployeeById(id) {
        for (const emp of this.data) {
            if (emp.id == id)
                return emp;
        }
        throw "No Employee of this ID found with us..!"
    }

    modifyEmployee(modifiedEmp) {
        const index = this.data.findIndex((emp) => emp.id == modifiedEmp.id);
        this.data.splice = (index, 1, modifiedEmp);
    }
}
