import React from "react";

const Search = props => {
  return (
    <div id={"formSearch"} className="form-group">
      <h1 className="App-title">Welcome to Marvel</h1>
      <input
        type="text"
        name="username"
        id="search"
        className="name"
        autoComplete={"off"}
        onKeyUp={(event)=>{
            
            const newText = event.target.value
            if(newText){
                props.handleInputUsers(newText)
            }
            
          }
        }
        // onKeyUp={props.handleInputUsers}
        onChange={(event)=>{
            const newText = event.target.value
            // setTimeout(() => console.log("onchange",newText), 300);
            // props.handleInputUsers(newText)
          }
        }
        onBlur={(event)=>{
            const newText = event.target.value
            console.log("blur",newText)
            // setTimeout(() => handleOpen(false), 300);
        }}
        placeholder={"Search"}
      />
      <button className={"search"} onClick={props.getCharaptersMarvel}>
        Send
      </button>
      <span className="error"></span>
    </div>
  );
};
export default Search;
