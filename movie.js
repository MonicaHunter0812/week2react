import React from 'react';
import MovieList from './movie-list';
import ReviewForm from './review-form';

export default class Movie extends React.Component{
    render(){

        let backToTheFutureReviews = [
            {
                user:'Matt',
                review:'Fun film!',
                stars:'4'
            },
            {
                user:'Sally',
                review:'Brings back memories',
                stars:'3'
            }
        ];

        let homeAloneReviews = [
            {
                user:'Christina',
                review:'Never gets old!',
                stars:'4'
            },
            {
                user:'Jerry',
                review:'A bit dated, but still fun.',
                stars:'3'
            }
        ];

        let etReviews = [
            {
                user:'Mary',
                review:'A moving, nice film about friendship.',
                stars:'4'
            },
            {
                user:'Jack',
                review:'I watch it every year!',
                stars:'5'
            }
        ];

        return <div>
            <div>
                <h1>Movies</h1>
                <MovieList {...{reviews: backToTheFutureReviews, name:'Back to the Future', synopsis: 'A 1980s classic about time travel.', rating: 'PG'}}/>
                <MovieList {...{reviews: homeAloneReviews, name:'Home Alone', synopsis: 'A Christmas comedy about a young boy who must protect his house.', rating: 'PG'}}/>
                <MovieList {...{reviews: etReviews, name:'E.T. the Extra-Terrestrial', synopsis: 'A sci-fi film about a child helping a friendly alien back home.', rating: 'PG'}}/>
            </div>
        </div>

    } 
}