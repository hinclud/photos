import React from 'react';
import BlogPost from './BlogPost'
import {Link} from 'react-router-dom'

export default function() {
	return (
		<div className="blog-post-section">
			<div className="date"><h3> 22/02/2020 </h3> <h3 style={{float: 'right'}}> Chakshu & Tanya </h3></div>
			<p> 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tempus ex, vel congue lectus. Vestibulum volutpat porta ultrices. Duis sit amet eleifend massa. Nullam interdum mi at varius sodales. Donec porta, velit sit amet tincidunt pulvinar, magna felis dapibus libero, non lacinia lectus mi id ipsum. Nunc rutrum eget mauris et cursus. Donec fermentum et massa non lobortis. Nulla dictum tempor massa et tristique.
			</p>
			<div className="img">
			
			</div>
			<Link to="/blog/entry/1">Read Post</Link>
		</div>);
}