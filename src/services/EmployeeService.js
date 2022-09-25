import axios from "axios";

const EMPLOYEE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_URL);
  }
}

export default new EmployeeService();
