import React from "react";
import { Router } from "@reach/router";
import LayoutWithNav from "../../components/LayoutWithNav";
import Dashboard from "../../components/Dashboard";
import Flowers from "../../components/Flowers";
import FuneraryServices from "../../components/FuneraryServices";
import EstatePlanning from "../../components/EstatePlanning";
import PetSetting from "../../components/PetSitting";
import Finished from "../../components/Finished";
import PrivateRoute from "../../components/PrivateRoute";
import { getUser } from "../../utils/auth";

class app extends React.Component {
  state = {
    user: null,
    selections: {},
  };

  handleSelection = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  componentDidMount = async () => {
    const user = await getUser();
    this.setState({
      user,
    });
  };

  render() {
    return (
      <LayoutWithNav loggedIn={true}>
        <Router>
          <PrivateRoute
            user={this.state.user}
            path="/app/dashboard"
            component={Dashboard}
          />
          <PrivateRoute
            user={this.state.user}
            handleSelection={this.handleSelection}
            path="/app/step1"
            component={Flowers}
          />
          <PrivateRoute
            user={this.state.user}
            handleSelection={this.handleSelection}
            path="/app/step2"
            component={FuneraryServices}
          />
          <PrivateRoute
            user={this.state.user}
            handleSelection={this.handleSelection}
            path="/app/step3"
            component={EstatePlanning}
          />
          <PrivateRoute
            user={this.state.user}
            handleSelection={this.handleSelection}
            path="/app/step4"
            component={PetSetting}
          />
          <PrivateRoute
            user={this.state.user}
            handleSelection={this.handleSelection}
            path="/app/step5"
            component={Finished}
          />
        </Router>
      </LayoutWithNav>
    );
  }
}

export default app;
