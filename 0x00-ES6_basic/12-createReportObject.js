export default function createReportObject(employeesList) {
<<<<<<< HEAD
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(empList) {
      return Object.keys(empList).length;
    },
  };
}
=======
    return {
      allEmployees: {
        ...employeesList,
      },
      getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
    };
  }
>>>>>>> alx-frontend-javascript/main
