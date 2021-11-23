export default function createIteratorObject(report) {
  const employees = [];
  for (const employee of Object.keys(report.allEmployees)) {
    report.allEmployees[employee].forEach((employee) => {
      employees.push(employee);
    });
  }

  return employees;
}
