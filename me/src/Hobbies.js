import React, { Component } from 'react';
import HobbyItem from './HobbyItem';
import './Media.css';

export default class Hobbies extends Component {
	render(){
		return (
			<div>
				<HobbyItem hobbyItem="Ice Skating" />
				<HobbyItem hobbyItem="Jigsaw Puzzles" />
				<HobbyItem hobbyItem="Hand Embroidery" />
				<HobbyItem hobbyItem="Beading" />
			</div>
		);
	}
}