import React, { Component } from 'react';
// 引入css样式
import './css/home.css';
// 引入样式
import { Menu, Dropdown, Icon, message } from 'antd';
export default class Index extends Component {
  render() {
    const onClick = ({ key }) => {
      message.info(`Click on item ${key}`);
    };
    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1">
          <a href="www.baidu.com">AE软件</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="www.baidu.com">AE插件</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="www.baidu.com">AE脚本</a>
        </Menu.Item>
        <Menu.Item key="4">
          <a href="www.baidu.com">AE教程</a>
        </Menu.Item>
        <Menu.Item key="5">
          <a href="www.baidu.com">AE模块</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="header">
        <div className="container">
          <img
            src="http://www.lookae.com/wp-content/uploads/2019/03/home-logo.png"
            width="129"
            height="40"
            className="con-img"
          />
          <ul className="header-ul">
            <li style={{ borderBottom: '#ff6651 solid 1px' }}>
              <a
                href="www.baidu.com"
                className="header-a"
                style={{ color: '#ff6651' }}
              >
                首页
              </a>
            </li>
            <li>
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  href="#"
                  className="header-li-a"
                >
                  AE资源
                  <Icon type="down" />
                </a>
              </Dropdown>
            </li>
            <li>
              <a
                href="www.baidu.com"
                className="header-a header-li-a"
                style={{ fontSize: '15px' }}
              >
                FCPX资源
              </a>
            </li>
            <li>
              <a href="www.baidu.com" className="header-a">
                PR模块
              </a>
            </li>
            <li>
              <a href="www.baidu.com" className="header-a">
                Mac专区
              </a>
            </li>
            <li>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link header-li-a" href="#">
                  软件插件
                  <Icon type="down" />
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link header-li-a" href="#">
                  素材
                  <Icon type="down" />
                </a>
              </Dropdown>
            </li>
            <li>
              <a href="www.baidu.com" className="header-a">
                精品资源
              </a>
            </li>
            <li>
              <a href="www.baidu.com" className="header-a">
                商城
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
