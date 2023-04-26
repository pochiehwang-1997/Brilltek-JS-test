class Problem1To3 {
    constructor(factories) {
        this.factories = factories;
    }
    // This method just count how many people are in one factory and output 
    // Time complexity O(n*m) n = number of factories, m = number of people in one factory
    employeeNumberByFactory() {
        let result = [];
        this.factories.forEach(factory => {
            result.push({ name: factory.name, count: factory.employees.length });
        });
        return result;
    }
    // This method first create a hashmap to store the information of employee
    // (to reduce search time in each iteration)
    // Then output the result as an array
    // Time complexity O(n*m) n = number of factories, m = number of people in one factory
    FactoryNumberByEmployee() {
        let employees = new Map();
        this.factories.forEach((factory) => {
            factory.employees.forEach(employee => {
                if (employees.has(employee)) {
                    employees.set(employee, employees.get(employee) + 1);
                } else {
                    employees.set(employee, 1);
                };
            });
        });
        let result = [];
        employees.forEach((value, key) => {
            result.push({ employee: key, count: value });
        });
        return result;
    }
    // This method sort the employees in alphabetic order and output
    // Time complexity O(n*m*log(m)) n = number of factories, m = number of people in one factory
    orderEmployeeByAlphabetical() {
        let result = [];
        this.factories.forEach((factory => {
            result.push({ name: factory.name, employees: factory.employees.sort() });
        }));
        return result;
    }
}

let ex1 = new Problem1To3([
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
]);

// Problem 1
console.log("Count Employees Number by Factory");
console.log(ex1.employeeNumberByFactory());
console.log("\n");
// Problem 2
console.log("Count Factories Number by Employee");
console.log(ex1.FactoryNumberByEmployee());
console.log("\n");
// Problem 3
console.log("Order employees list by alphabetical order");
console.log(ex1.orderEmployeeByAlphabetical());
console.log("\n");
