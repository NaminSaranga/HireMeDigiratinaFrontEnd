import React, { Component } from "react";
import image from "../images/Digiratina.png";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav style={{ backgroundColor: "white" }} dark expand="md">
            <div>
              <img src={image} width={100} height={80} />
              <a
                className="navbar-brand"
                style={{ fontWeight: "bold", marginLeft: "10px" }}
              >
                Employee Management
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
