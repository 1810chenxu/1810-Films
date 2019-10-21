import React, { Component } from 'react';
import { Card } from 'antd';

const { Meta } = Card;
class home extends Component {
	render() {
		return (
			<div className='content-pages'>
				<a href={this.props.https} >
					<Card
						hoverable
						style={{ width: 220 }}	
						cover={<img alt="example" src={this.props.src} />}
						className='content-pages-Card'
					>
						<Meta title={this.props.name} description={this.props.link} />
					</Card>
				</a>
			</div>
		);
	}
}

export default home;