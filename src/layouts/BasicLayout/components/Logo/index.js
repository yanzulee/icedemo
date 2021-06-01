import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Img from '@icedesign/img';
import './index.scss';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo">
        <Link to="/" className="logo-text">
          <Img src={require('../../../../assets/newlogo.png')} width={73} type="contain" style={{ display: 'block', verticalAlign: 'middle' }} />
        </Link>
      </div>
    );
  }
}
