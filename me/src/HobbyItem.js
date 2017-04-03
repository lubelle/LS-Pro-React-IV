import React, { Component } from 'react';
import './App.css';

export default class HobbyItem extends Component{
	render(){
		return (
			<h3>{this.props.hobbyItem}</h3>
		);
	}
}