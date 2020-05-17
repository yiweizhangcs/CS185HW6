import React, { Component } from 'react';
import Movie from './Movie';
import './MovieStyle.css'
const list = require('./imdbid.json');
// access the data
  	// const list=[

  	// 	{"id":"tt7286456"},
  	// 	{"id":"tt8579674"},
  	// 	{"id":"tt4154796"},
  	// 	{"id":"tt8420184"},
  	// 	{"id":"tt0944947"},
  	// 	{"id":"tt1375666"},
  	// 	{"id":"tt1950186"},
  	// 	{"id":"tt0816692"}];

export default class MovieGallery extends Component {
	action(poster_src, title, director, rating, plot, score){
		document.body.style.overflow='hidden';

		var box = document.createElement('div');
		box.id='box';
		box.className = 'box_class';
		

		var box_show = document.createElement('div');
	    box_show.id = 'box_show';
	    box_show.className='box_show_class';

	    var Poster = document.createElement('img');
		Poster.id = 'Poster';
		Poster.src = poster_src;

		var movieInfo = document.createElement('div');
		movieInfo.id='movieInfo';

		movieInfo.innerHTML =  
		'<span class=\'title\'>'+title+
		'</span><br/><span class=\'director\'> Directed by:  '+director+
		'</span><br/><br/><span class=\'rating\'>imdbRating: '+rating+
		'</span><span class=\'score\'>Metascore: '+score+
		'</span><br/><br/><p>Introduction:' +plot+
		'</p><br/><br/> ';

	   

	    document.body.appendChild(box);
	    document.getElementById('box').appendChild(box_show);
	    document.getElementById('box_show').appendChild(Poster);
	    document.getElementById('box_show').appendChild(movieInfo);

	    document.getElementById('box').addEventListener('click', function(event) {
	      if(event.target.className === 'box_class') {
	        document.getElementById('box').removeChild(document.getElementById('box_show'));
	        document.body.removeChild(document.getElementById('box'));
	        document.body.style.overflow = 'auto';
	      }
	    });
	}

  get(){
  	let movies =[];
  	for(let movie of list){
  		movies.push(movie.id);
  	}
  	return movies;
  }

  render() {
  	// const movies=[

  	// 	{"id":"tt7286456"},
  	// 	{"id":"tt8579674"},
  	// 	{"id":"tt4154796"},
  	// 	{"id":"tt8420184"},
  	// 	{"id":"tt0944947"},
  	// 	{"id":"tt1375666"},
  	// 	{"id":"tt1950186"},
  	// 	{"id":"tt0816692"}];
 		let movies=this.get();
    	return movies.map((movie)=>(
			<div className='picture'>
				<Movie movie={movie} action={this.action} />
			</div>
			));

      }
}

