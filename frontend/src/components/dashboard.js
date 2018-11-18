import React, { Component } from "react";
import CircleButton from "../components/CircleButton";
import { Link } from "gatsby";
export default class Dashboard extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div className="inner">
        <p>
          Hello {user.firstName}. We at RemeberHQ understand this is a difficult
          time for both you and your family. Let us walk you through the next
          steps with our Quick Start guide, and take some of the burden off your
          shoulders.
        </p>
        <Link to="app/step1" className="center">
          <CircleButton med>Quick Start</CircleButton>
        </Link>
      </div>
    );
  }
}
