import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListDigiratinaEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  addEmployee() {
    this.props.history.push("/add-employee/add");
  }

  editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  viewEmployee(id) {
    this.props.history.push(`/view/${id}`);
  }

  render() {
    return (
      <div>
        <div
          style={{
            padding: "1em 0em",
          }}
        >
          <h2 className="text-center">Digiratina Employees List</h2>
        </div>
        <div
          style={{
            padding: "1em 0em",
          }}
        >
          <button className="btn btn-success" onClick={this.addEmployee}>
            Add New Employee
          </button>
        </div>
        <div className="row">
          <table
            className="table table-striped table-bordered"
            style={{ border: "1px solid black", borderRadius: "5px!important" }}
          >
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.designation}</td>
                  <td>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-primary"
                    >
                      Update
                    </button>

                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>

                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewEmployee(employee.id)}
                      className="btn btn-dark"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListDigiratinaEmployeeComponent;
