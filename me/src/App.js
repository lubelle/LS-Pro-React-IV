import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Hobbies from './Hobbies';
import Media from './Media';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
	<Router>
      <div className="App">
        <div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>React Router</h2>
        </div>
		<div>
			<ul className="flex-container">
				<li className="flex-item">
					<Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
				</li>
				<li className="flex-item">
					<Link to="/hobbies" style={{ textDecoration: 'none' }}>Hobbies</Link>
				</li>
				<li className="flex-item">
					<Link to="/media" style={{ textDecoration: 'none' }}>Media</Link>
				</li>
			</ul>
			<Route path="/about" component={About} />
			<Route path="/hobbies" component={Hobbies} />
			<Route path="/media" component={Media} />
		</div>
      </div>
	</Router>
    );
  }
}

export default App;
