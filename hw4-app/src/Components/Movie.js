import React, { Component } from 'react';
import './style2b.css';
import './Movie.css';
const axios = require('axios');

export class Movie extends Component {
	constructor(){
		super();
		this.state = {
			title: '',
			plot: '',
			director: '',
			imdb: '',
			src:''
		}
	}

	// click = () =>{
	// 	//disable the scroll
 //        // Get the current page scroll position 
 //        var scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
 //        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
 //        // if any scroll is attempted, set this to the previous value 
 //        window.onscroll = function() { 
 //            window.scrollTo(scrollLeft, scrollTop); 
 //        }; 

 //        var modal = document.getElementById("movie-lightbox-modal");
 //        modal.style.display = "flex";

 //        //Load the values into the modal
 //        var modalImg = document.getElementById("modal-img");
 //        modalImg.src = this.state.poster;

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
	getMovieInfo(obj, req) {
    axios.get(req)
    .then(function (response) {
      obj.setState({
        src: response.data.Poster,
        title: response.data.Title,
        imdb: response.data.imdbRating,
        plot: response.data.Plot,
        director: response.data.Director,
      });
      console.log(response.data);
    })
  }

  render() {
  	let req = 'http://www.omdbapi.com/?apikey=a26f20ed&i=' + this.props.movie;
    	return (
			 <div className='frame'>
		        {this.getMovieInfo(this, req)}
		        <img src={this.state.src}  
		        onClick={this.props.enlarge.bind(this, this.state.src, this.state.title, this.state.director, this.state.imdb, this.state.plot)} alt={this.state.title}/>
		      </div>
		);
      }
}
export default Movie;
