import React from 'react';

export default class ReviewForm extends React.Component{
    render(){
        return (
           <div class="container form-control border border-primary">
                <form class="card-body">
                <div className="form-group">
                    <label>What do you think about this film?</label>
                    <input type="text" className="form-control" placeholder="Enter review"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
           </div> 
        );
    }
}