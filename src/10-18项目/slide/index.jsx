import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.scss';
export default class index extends Component {
  render() {
    return (
      <div className='slide'>
        <Carousel autoplay className='ant-carousel'>
          <div className='slick-slide'>
            <img src={require('./img/js.jpg')} />
            
          </div>
          <div  className='slick-slide'>
          <img src={require('./img/jq.jpg')} />
          </div>
          <div  className='slick-slide'>
    
          <img src={require('./img/vue.jpg')} />
          </div>
          <div  className='slick-slide'>
          <img src={require('./img/react.jpg')} />
          </div>
        </Carousel>
      </div>
    );
  }
}
