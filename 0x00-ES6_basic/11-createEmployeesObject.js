export default function createEmployeesObject(departmentName, employees) {
<<<<<<< HEAD
  return { [departmentName]: employees };
}
=======
    return { [departmentName]: [...employees] };
  }
>>>>>>> alx-frontend-javascript/main
