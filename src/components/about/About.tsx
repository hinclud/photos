import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {Row, Col} from 'react-bootstrap'

export default function() {
	return (<div id="about">
		<h1>About Anand Utsav</h1>
		<img src='http://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget suscipit nunc, sit amet ullamcorper nulla. Mauris imperdiet sed lectus at imperdiet. Aenean gravida arcu et erat aliquet vulputate sit amet laoreet massa. Curabitur mattis vitae urna in malesuada. Etiam venenatis lectus ac velit efficitur pulvinar. Mauris quis congue enim, eu venenatis odio. Pellentesque ut consectetur risus. Vivamus non posuere lorem. Sed porttitor pellentesque massa, id vulputate tellus dapibus nec.

In at placerat ante. Nulla venenatis posuere gravida. Nunc tincidunt elit id felis pharetra consequat. Maecenas vitae lacus sed neque sollicitudin euismod et ut orci. Fusce erat purus, luctus sed rutrum ac, eleifend non felis. Mauris facilisis lacinia ipsum quis semper. Sed porttitor augue vel nisi lobortis semper. Suspendisse mi ex, pretium et tristique et, blandit in sem.

Nunc in nulla lacus. Suspendisse id nisl varius, condimentum ante quis, auctor dui. Vivamus non porta nisi. Vestibulum varius bibendum lorem, a vulputate mauris ullamcorper ultricies. Nulla posuere sapien eget lectus pretium, et elementum est tincidunt. Nunc nec rutrum nisi. Vestibulum vestibulum, velit non finibus cursus, dolor neque ultricies elit, at tempus tellus turpis et nunc. Praesent finibus enim porttitor nisi imperdiet vehicula. Sed convallis maximus dignissim. Integer venenatis est in leo interdum, vitae scelerisque magna auctor. In molestie nunc id elementum lobortis. Proin scelerisque luctus enim eget rhoncus. Etiam eget facilisis enim.
		</p>
		<div className="links">
			<h3>Connect with us on </h3>
			<SocialIcon className="link" url="https://spotify.com/manuvergujjar" />
			<SocialIcon className="link" url="mailto://manvvergujjar@gmail.com" />
			<SocialIcon className="link" url="https://twitter.com/manuvergujjar" />
			<SocialIcon className="link" url="https://facebook.com/manuvergujjar" />
			<SocialIcon className="link" url="https://instagram.com/manuvergujjar" />
			<SocialIcon className="link" url="https://snapchat.com/manuvergujjar" />
			<SocialIcon className="link" url="https://linkedin.com/manuvergujjar" />
		</div>
	</div>)
}