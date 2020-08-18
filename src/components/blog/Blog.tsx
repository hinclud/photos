import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import BlogPostSection from './BlogPostSection'
import BlogPost from './BlogPost'
import AllPosts from './AllPosts'


export default function() {
	return (
			<AllPosts />
		)
}