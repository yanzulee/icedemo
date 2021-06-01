import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userProfile } from '../../store/userProfile/action';
import { userLogout } from '../../store/userLogout/action';

const BasicLayoutHoc = (WrappedComponent) => {
  class Container extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      this.props.userProfile();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapDispatchToProps = {
    userProfile,
    userLogout,
  };

  const mapStateToProps = (state) => {
    return { profile: state.profile, logout: state.logout };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Container);
};

export default BasicLayoutHoc;
