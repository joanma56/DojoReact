import React from 'react';
import Reflux from 'reflux';
import motelStore from '../stores/motelStore';

var motelGrid = React.createClass({

	mixins:[Reflux.connect(motelStore, 'mst')], //Se conecta al componente y le asigna un alias

	render: function(){
		if(this.state.mst){

			return <div>{
				this.state.mst.map(function(image){
					return <div classname="image">
								<h4>{image.name}</h4>
								<a href={image.URL_WebPage}>
									<img src = {image.logo}></img>
								</a>
								<p>{image.description}</p>
						   </div>
				})
			}
			</div>

		}else{
			return (<p>There are not data to show</p>);
		}
	}
});

module.export= motelGrid;