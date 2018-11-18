import React, { Component } from "react";
import posed from "react-pose";

export default class PoseTransition extends Component {
  state = { isVisible: false };

  componentDidMount() {
    setTimeout(() => {
      console.log("time");
      this.setState({ isVisible: true });
    }, 100);
  }

  render() {
    const { isVisible } = this.state;
    return (
      <Reveal pose={isVisible ? "visible" : "hidden"}>
        {this.props.children}
      </Reveal>
    );
  }
}

const Reveal = posed.div({
  hidden: { opacity: 0, transform: "scale(0.95)" },
  visible: { opacity: 1, transform: "scale(1)" },
  transition: {
    opacity: { ease: "easeOut", duration: 2000 },
    transform: { ease: "easeOut", duration: 2000 },
  },
});
