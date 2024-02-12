export default function createIteratorObject(report) {
<<<<<<< HEAD
  const emps = [];
  // eslint-disable-next-line
  for (const dep of Object.keys(report.allEmployees)) {
    // eslint-disable-next-line
    for (const emp of report.allEmployees[dep]) {
      emps.push(emp);
    }
  }

  return emps;
}
=======
    let allEmployees = [];
    for (const item of Object.values(report.allEmployees)) {
      allEmployees = [
        ...allEmployees,
        ...item,
      ];
    }
    return allEmployees;
  }
>>>>>>> alx-frontend-javascript/main
