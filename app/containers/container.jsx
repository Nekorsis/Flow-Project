// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './container.styl';

class Container extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='container'>
				Hello world!
			</div>
		);
	}
}

ReactDOM.render(<Container/>, document.getElementById('app'));
