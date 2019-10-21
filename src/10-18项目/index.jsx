import React, { Component } from 'react';
import 'antd/dist/antd.css';
// 引入头部组件
import Home from './home/index';
// 引入底部组件
import Footer from './footer';
// 引入轮播图文件
import Slide from './slide';
// 引入主题内容
import Content from './content/index';
export default class Index extends Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Home />
        {/* 轮播图 */}
        <Slide />
        {/*主体内容*/}
        <Content />
        {/* 底部 */}
        <Footer />
      </div>
    );
  }
}
