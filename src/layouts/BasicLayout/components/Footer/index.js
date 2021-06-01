import React, { PureComponent } from 'react';
import Layout from '@icedesign/layout';
import Logo from '../Logo';

import './index.scss';

export default class Footer extends PureComponent {
  render () {
    return (
      <Layout.Footer className="ice-design-layout-footer" type={null}>
        <div className="ice-design-layout-footer-body">
          <div style={{ filter: 'grayscale(100%)', opacity: 0.3 }}>
            <Logo />
          </div>
          <div className="copyright">
            {/* COPYRIGHT © 2015-2020 XCXCAR.COM ALL RIGHTS RESERVED */}
            Copyright © 2020 畅行数科 版权所有
          </div>
        </div>
      </Layout.Footer>
    );
  }
}
