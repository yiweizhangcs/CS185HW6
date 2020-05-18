import React, { Component } from 'react';
import './MovieStyle.css';
const axios = require('axios');

export class Movie extends Component {
	constructor(){
		super();
		this.state = {
			title: '',
			plot: '',
			director: '',
			imdb: '',
			src:'',
			meta:''
		}
	}

	// click = () =>{
	// 	//disable the scroll
 

 //        document.getElementById("movie-title").innerHTML = this.state.title;
 //        document.getElementById("movie-rating-imdb").innerHTML = this.state.ratingIMDb;
 //        document.getElementById("movie-director").innerHTML = this.state.director;
   

 //        //Add listener for clicking out of modal
 //        if (modal) {
 //            modal.addEventListener("click", e=>{
 //                if(e.target !== e.currentTarget)
 //                    return;
 //                modal.style.display = "none";
 //                //re enable scrolling
 //                window.onscroll = function() {}; 
 //            })
 //        }
	// }
	// componentDidMount(){

	// 	axios.get('http://www.omdbapi.com/?apikey=a26f20ed&i=' + this.props.movieID)
	// 	.then((response)=>
	// 		this.setState({
	// 			title: response.data.Title,
	// 			poster: response.data.Poster,
	// 			director: response.data.Director,
	// 			rating: response.data.imdbRating
	// 		})
	// 	)
	// 	.catch(error){
	// 		console.error(error);
	// 	}
	// }
	accessInfo(temp, access) {
    axios.get(access)
    .then(function (response) {
      temp.setState({
        src: response.data.Poster,
        title: response.data.Title,
        imdb: response.data.imdbRating,
        plot: response.data.Plot,
        director: response.data.Director,
        meta: response.data.Metascore,
      });
      console.log(response.data);
    })
  }

  render() {
  	let access = 'https://www.omdbapi.com/?apikey=a26f20ed&i=' + this.props.movie;
    	return (
			<div className='picture_2'>
		        {this.accessInfo(this, access)}
		        <img src={this.state.src}  
		        onClick={this.props.action.bind(this, this.state.src, this.state.title, 
		        	this.state.director, this.state.imdb, this.state.plot, this.state.meta)}
		        alt={this.state.title}/>
		        <br/>
		     </div>
		);
      }
}
export default Movie;






