import React from 'react';
import Reviews from './reviews';

export default class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reviews: props.reviews,
            name: props.name,
            name: props.synopsis,
            name: props.rating
        };
    }
    
    render(){
        let reviews;

        if(this.state.reviews){
            reviews = this.state.reviews.map((review, index)=> <Reviews key={index} {...review}/>);
        }

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.synopsis}</p>
                    <p className="card-text">{this.props.rating}</p>
                </div>
                <div className="card-footer">
                    {reviews}
                </div>
            </div>
        );
    }
}