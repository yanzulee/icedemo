/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tab } from '@alifd/next';
import { divide } from 'lodash';

@injectIntl
@withRouter
class Header extends Component {
  constructor(props) {
    super(props);
    const tabs = [
      { tab: '交易市场', type: 'trading_market', key: 1, closeable: false },
      { tab: '服务中心', type: 'service_center', key: 2, closeable: false }
    ];
    this.state = {
      
    };
  }


  componentDidMount () {
    
  }

  render () {
  }
}

const styles = {
  passwordBox: {
    width: '124px',
    height: '40px',
    cursor: 'pointer',
    // backgroundColor: '#E7F7F7'
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    marginLeft: '15px', marginRight: '8px', width: '14px', height: '14px', color: '#E7F7F7'
  }
}

class ChangePassword extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      userData: props.userData,
      step: 0,
      codeText: '发送验证码',
      sendVerify: true,
    };
    this.time = 60;
  }



 




  render () {
    return (
      <div>demo</div>
    )
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
