import React from 'react';
import Images from './Images';

interface IProps {
	match?: any
}

export default function(props: IProps) {

	// const {id} = props?.match?.params

	return (<div className="blog-post">
		<div className="date"><h3> 22/02/2020 </h3> <h3 style={{float: 'right'}}> Chakshu & Tanya </h3></div>
		<p> 
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tempus ex, vel congue lectus. Vestibulum volutpat porta ultrices. Duis sit amet eleifend massa. Nullam interdum mi at varius sodales. Donec porta, velit sit amet tincidunt pulvinar, magna felis dapibus libero, non lacinia lectus mi id ipsum. Nunc rutrum eget mauris et cursus. Donec fermentum et massa non lobortis. Nulla dictum tempor massa et tristique.
		</p>
		<Images />
	</div>);
}