import React from "react";

function withModal(WrappedComponent) {
  return class extends React.Component {
    state = {
      isVisible: false,
    };

    showModal = () => {
      this.setState({
        isVisible: true,
      });
    };

    closeModal = () => {
      this.setState({
        isVisible: false,
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          showModal={this.showModal}
          closeModal={this.closeModal}
        />
      );
    }
  };
}

export default withModal;
