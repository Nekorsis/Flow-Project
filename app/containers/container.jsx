import React from 'react';
import ReactDOM from 'react-dom';
import './container.styl';

class Container extends React.Component {
	render() {
		return (
			<div className= 'parent'>
				<h1 className='hello'>Hello</h1>
				<h2 className='world'>World</h2>
				<h3>dasdsвфывыфвывывфывad</h3>
			</div>
		);
	}
}

ReactDOM.render(<Container/>, document.getElementById('world'));
