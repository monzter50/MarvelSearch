import React from 'react';

const Card = (props) => {
    return(
        <div id={"card"} className={"card"}>
            <div className={"card-content"}>
                <div className="card-image">
                    <img src={props.path+"/portrait_uncanny."+props.extension}/>
                    <div className={"card-title"}>
                        <h1> {props.name}</h1>
                    </div>
                </div>
                <div className="card-description">
                    <p>{props.description}</p>
                </div>
                <button className={"close"} onClick={props.handleClose}>x</button>
            </div>
        </div>

    )
}
export default Card;