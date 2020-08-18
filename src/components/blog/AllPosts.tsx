import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import BlogPostSection from './BlogPostSection'


export default function() {
	return (
		<div className="all-posts">
			<h1>Anand Utsav Blog</h1>
			<BlogPostSection />
			<BlogPostSection />
			<BlogPostSection />
			<BlogPostSection />
			<BlogPostSection />
			<BlogPostSection />
			<BlogPostSection />
			<BlogPostSection />
			<BlogPostSection />
			<BlogPostSection />
		</div>)
}