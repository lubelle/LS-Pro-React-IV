import React, { Component } from 'react';
import './Media.css';
import Image from './Image';

export default class Media extends Component {
	render(){
		return (
			<div className="flex-media_container">
				<Image className="flex-media_item" src={'http://mybeadingstudio.com/assets/garden-profile-0.jpg'} alt={'garden-profile-0.jpg'} />
				<Image className="flex-media_item" src={'http://mybeadingstudio.com/assets/garden-profile-2.jpg'} alt={'garden-profile-2.jpg'} />
				<Image className="flex-media_item" src={'http://mybeadingstudio.com/assets/garden-profile-3.jpg'} alt={'garden-profile-3.jpg'} />
				<Image className="flex-media_item" src={'http://mybeadingstudio.com/assets/garden-profile-4.jpg'} alt={'garden-profile-4.jpg'} />
			</div>
		);
	}
}