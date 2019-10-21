import React, { Component } from 'react';
import { Pagination } from 'antd';
class index extends Component {
	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		return (
			<div>
				<div className='constent-paging'>
					<Pagination defaultCurrent={1} total={50} />
				</div>
			</div>
		)
	}
}

export default index;