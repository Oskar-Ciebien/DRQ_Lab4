// Imports from React and MovieItem
import React from 'react';
import { MovieItem } from './movieItem';

// Movies Class Component - Inherits from React.Component
export class Movies extends React.Component {

    render() {
        // Movies Main Code
        return this.props.mymovies.map(
            (movie)=>{
                return <MovieItem key={movie.imdbID} mymovie={movie}></MovieItem>
            }
        );
        // (
        //     <div>
        //         <h3>Hello from Movies Component</h3>
        //         {console.log(this.props.mymovies)}
                
        //     </div>
        // );
    }

}