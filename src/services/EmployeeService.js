import axios from "axios";

const EMPLOYEE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_URL);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_URL, employee);
  }

  getEmployeeByid(eid) {
    return axios.get(EMPLOYEE_URL + "/" + eid);
  }

  updateEmployee(employee, eid) {
    return axios.put(EMPLOYEE_URL + "/" + eid, employee);
  }
}

export default new EmployeeService();
