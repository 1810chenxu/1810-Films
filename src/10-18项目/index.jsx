import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Footer from './footer';
import Slide from './slide';
export default class Index extends Component {
  render() {
    return (
      <div>
          {/* 轮播图 */}
        <Slide />
        {/* 底部 */}
        <Footer />
      </div>
    );
  }
}
