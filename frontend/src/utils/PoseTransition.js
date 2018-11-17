import React, { Component } from "react";
import posed from "react-pose";

export default class PoseTransition extends Component {
  state = { isVisible: false };

  componentDidMount() {
    this.setState({ isVisible: true });
  }

  render() {
    const { isVisible } = this.state;
    return (
      <Reveal
        pose={isVisible ? "visible" : "hidden"}
        style={{ transition: "all 625ms ease-out" }}
      >
        {this.props.children}
      </Reveal>
    );
  }
}

const Reveal = posed.div({
  hidden: { opacity: 0, transform: "scale(0.8)" },
  visible: { opacity: 1, transform: "scale(1)" },
});
