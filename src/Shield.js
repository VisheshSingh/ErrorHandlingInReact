import React, { Component } from "react";

class Shield extends Component {
  state = {
    error: null,
    info: null
  };
  componentDidCatch(error, info) {
    this.setState({
      error: error,
      info: info
    });
  }
  render() {
    if (this.state.info) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.info.componentStack}
          </details>
        </div>
      );
    }
    // Render children if there's no error
    return this.props.children;
  }
}

export default Shield;
