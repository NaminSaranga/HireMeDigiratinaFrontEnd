import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class CreateUpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      email: "",
      designation: "",
    };

    this.FirstNameHandler = this.FirstNameHandler.bind(this);
    this.LastNameHandler = this.LastNameHandler.bind(this);
    this.EmailHandler = this.EmailHandler.bind(this);
    this.DesignationHandler = this.DesignationHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
  }

  FirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  LastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  EmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  DesignationHandler = (event) => {
    this.setState({ designation: event.target.value });
  };

  componentDidMount() {
    if (this.state.id === "add") {
      return;
    } else {
      EmployeeService.getEmployeeByid(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          email: employee.email,
          designation: employee.designation,
        });
      });
    }
  }

  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      designation: this.state.designation,
    };
    console.log("employee => " + JSON.stringify(employee));

    if (this.state.id === "add") {
      EmployeeService.createEmployee(employee).then((res) => {
        this.props.history.push("/employees");
      });
    } else {
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
        this.props.history.push("/employees");
      });
    }
  };

  cancel() {
    this.props.history.push("/employees");
  }

  formTitle() {
    if (this.state.id === "add") {
      return <h3 className="text-center">Add Digiratina Employee</h3>;
    } else {
      return <h3 className="text-center">Update Digiratina Employee</h3>;
    }
  }

  render() {
    return (
      <div
        style={{
          padding: "1em 0em",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.formTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.FirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.LastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email: </label>
                    <input
                      placeholder="Email Address"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.EmailHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Designation: </label>
                    <input
                      placeholder="Designation"
                      name="designation"
                      className="form-control"
                      value={this.state.designation}
                      onChange={this.DesignationHandler}
                    />
                  </div>

                  <div
                    style={{
                      padding: "1em 0em",
                    }}
                  >
                    <button
                      className="btn btn-success"
                      onClick={this.saveOrUpdateEmployee}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUpdateEmployeeComponent;
