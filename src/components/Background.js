import React, { Component } from 'react';
import logo from '../bg.jpg'

class App extends Component {
render() {
	const myStyle={
		backgroundImage:{logo},
		height:'100vh',
		marginTop:'-70px',
		fontSize:'50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};
	return (
	<div style={myStyle}>
	</div>
	);
}
}

export default App;
