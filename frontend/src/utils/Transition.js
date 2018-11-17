import React, { Component } from "react";
import PageTransition from "gatsby-plugin-page-transitions";

class Transition extends Component {
  render() {
    return (
      <PageTransition
        defaultStyle={{
          opacity: "0",
          transform: "scale(0.95)",
          transition: "all 625ms ease-out",
        }}
        transitionStyles={{
          entering: { opacity: "1", transform: "scale(1)" },
          entered: { opacity: "1", transform: "scale(1)" },
          exiting: { opacity: "0", transform: "scale(0.5)" },
        }}
        transitionTime={625}
      >
        {this.props.children}
      </PageTransition>
    );
  }
}

export { Transition };
