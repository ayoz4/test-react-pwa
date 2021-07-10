import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { search } from "../../redux/actions/youtubeActions";

function withSearch(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

const mapStateToProps = (state) => ({
  videos: state.videos,
});

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(search(query)),
});

const wrapper = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withSearch
);

export default wrapper;
