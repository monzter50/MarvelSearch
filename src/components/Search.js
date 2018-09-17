import React from 'react';

const Search = (props) =>{
    return(
        <div id={"formSearch"} className="form-group">
            <h1 className="App-title">Welcome to Marvel</h1>
            <input type="text" name="username" id="search" className="name" autoComplete={"off"} onKeyPress={props.getCharaptersMarvel} placeholder={"Search"}/>
            <button className={"search"} onClick={props.getCharaptersMarvel}>Send</button>
            <span className="error"></span>
        </div>
    )
}
export default Search;