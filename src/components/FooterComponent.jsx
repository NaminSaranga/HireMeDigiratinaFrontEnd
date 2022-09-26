import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer
          className="footer"
          style={{ backgroundColor: "#1B4F72", padding: "1em 0em" }}
          dark
          expand="md"
        >
          <span className="text-muted">
            All Rights Reserved 2022 @Digiratina
          </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
