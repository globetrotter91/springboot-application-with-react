import React, { Component } from 'react';
import Stocks from './container/stocks';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<div className='page-header'>
					<Stocks />
				</div>
			</div>
		);
	}
}

export default App;
