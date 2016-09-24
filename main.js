import React from 'react';
import ReactDOM from 'react-dom';
import motelActions from './actions/motelActions';
import motelGrid from './components/motelGrid.jsx';

setInterval(
	function(){
		motelActions.fetchList();
	},
	5000);

ReactDOM.render(<motelGrid />,document.getElementById('app'));