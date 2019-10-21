import React, { Component } from 'react';
import './index.css'
import Paging from './paging/index';
import Home from './pages/home';
// import News from './pages/news';
// import About from './pages/about';

// let imgs = [
// 	{
// 		{
// 		src: require("./img/iPhone8.jpg"),
// 		hue: require("./img/iPhone8.jpg"),
// 		money: '4999.00',
// 		name: 'Apple/苹果 iPhone 8 Plus',
// 		shop: '小张足浴店',
// 		sales: '1笔'
// 	},
// 	}
// ]
class index extends Component {
	constructor() {
		super()
		this.state = {
			imgs: [
				{
					src: require("./img/antd.svg"),
					name: 'Ant Design - 一个 UI 设计语言',
					link: 'https://ant.design/index-cn',
					https: 'https://ant.design/index-cn'
				},
				{
					src: require("./img/vue.png"),
					name: '渐进式JavaScript 框架',
					link: 'https://cn.vuejs.org/',
					https: 'https://cn.vuejs.org/'
				},
				{
					src: require("./img/bootstrap.jpg"),
					name: '前端开发的开源工具包, CSS/HTML框架',
					link: 'https://www.bootcss.com/',
					https: 'https://www.bootcss.com/'
				},
				{
					src: require("./img/jquery.jpg"),
					name: '一个 JavaScript 库,极大地简化了 JavaScript 编程',
					link: 'https://jquery.com/',
					https: 'https://jquery.com/'
				},

				{
					src: require("./img/antd.svg"),
					name: 'Ant Design - 一个 UI 设计语言',
					link: 'https://ant.design/index-cn',
					https: 'https://ant.design/index-cn'
				},
				{
					src: require("./img/vue.png"),
					name: '渐进式JavaScript 框架',
					link: 'https://cn.vuejs.org/',
					https: 'https://cn.vuejs.org/'
				},
				{
					src: require("./img/bootstrap.jpg"),
					name: '前端开发的开源工具包, CSS/HTML框架',
					link: 'https://www.bootcss.com/',
					https: 'https://www.bootcss.com/'
				},
				{
					src: require("./img/jquery.jpg"),
					name: '一个 JavaScript 库,极大地简化了 JavaScript 编程',
					link: 'https://jquery.com/',
					https: 'https://jquery.com/'
				},
				{
					src: require("./img/antd.svg"),
					name: 'Ant Design - 一个 UI 设计语言',
					link: 'https://ant.design/index-cn',
					https: 'https://ant.design/index-cn'
				},
				{
					src: require("./img/jquery.jpg"),
					name: '一个 JavaScript 库,极大地简化了 JavaScript 编程',
					link: 'https://jquery.com/',
					https: 'https://jquery.com/'
				},
			]
		}
	}
	render() {
		return (
			<div className='content-gsh-04'>
				{
					this.state.imgs.map((item, index) => {
						return (
							<Home
								src={item.src}
								name={item.name}
								link={item.link}
								https={item.https}
								key={index}
							/>
						)
					})
				}
				<Paging className='ant-pagination' />
			</div>
		)
	}
}

export default index;