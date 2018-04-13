import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
    }

    searchInputHandler = (event) => {
        console.log(event.target.value);
        this.setState({term: event.target.value});

    }

    render(){
        return(
            <form className="input-group">
                <input placeholder="Get a five-day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.searchInputHandler}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}