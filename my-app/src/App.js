import logo from './logo.svg';
import './App.css';
import React, { createContext, createElement } from 'react';

export const App = () => {
	const newDate = new Date().getFullYear();
	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Lets code! <code>src/App.js</code> and save to reload.
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 		</header>
	// 	</div>
	// );
	return React.createElement(
		'div',
		{
			className: 'App',
		},
		React.createElement(
			'header',
			{
				className: 'App-header',
			},
			React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			React.createElement('p', null, 'Lets code! src/App.js and save to reload.'),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement('div', null, `${newDate}`),
		),
	);
};
