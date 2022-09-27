import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeByid(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  cancel() {
    this.props.history.push("/employees");
  }

  render() {
    return (
      <div
        style={{
          padding: "1em 0em",
        }}
      >
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Employee Details</h3>
          <div className="card-body">
            <div
              className="row"
              style={{
                padding: "1em 0em",
              }}
            >
              <label style={{ fontWeight: "bold" }}>First Name:</label>
              <div style={{ marginLeft: "20px" }}>
                {this.state.employee.firstName}
              </div>
            </div>

            <div
              className="row"
              style={{
                padding: "1em 0em",
              }}
            >
              <label style={{ fontWeight: "bold" }}>Last Name:</label>
              <div style={{ marginLeft: "20px" }}>
                {this.state.employee.lastName}
              </div>
            </div>

            <div
              className="row"
              style={{
                padding: "1em 0em",
              }}
            >
              <label style={{ fontWeight: "bold" }}>Email:</label>
              <div style={{ marginLeft: "20px" }}>
                {this.state.employee.email}
              </div>
            </div>

            <div
              className="row"
              style={{
                padding: "1em 0em",
              }}
            >
              <label style={{ fontWeight: "bold" }}>Designation:</label>
              <div style={{ marginLeft: "20px" }}>
                {this.state.employee.designation}
              </div>
            </div>

            <button
              className="btn btn-success"
              onClick={this.cancel.bind(this)}
              style={{ marginLeft: "10px" }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;
