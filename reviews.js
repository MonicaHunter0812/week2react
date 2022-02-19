import React from 'react';

export default class Reviews extends React.Component{
    render(){
        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-black">
                    <h4>{this.props.user}</h4>
                </div>
                <div className="card-body">
                    <p>{this.props.review}</p>  
                </div>
               <div className="card-footer">
                    <p>{this.props.stars}/5 Stars</p>
               </div>
            </div>
        );
    }
}
