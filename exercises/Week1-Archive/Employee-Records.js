var employees = [];

function Employees (name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "full-time";
    this.printEmployeeForm = function() {
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status)
    };
    this.add = function() {
        employees.push();
    }
}

var penny = new Employees("Penny", "waitress", "25k");
var leonard = new Employees("Leonard", "physicist", "50k");
var bernadette = new Employees("Bernadette", "Microbiologist", "100k");


employees.push(penny);


//employees.add(penny);
//employees.add(leonard);
//employees.add(bernadette);
//
console.log(penny.printEmployeeForm());
////console.log(leonard.printEmployeeForm());
////console.log(bernadette.printEmployeeForm());


console.log(employees);
    
    