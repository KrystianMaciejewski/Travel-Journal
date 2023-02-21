import React from "react"

export default function Card(props){
    console.log(props)
    return(
        <div className="card--container">
            <img 
            src={props.imageUrl} 
            alt="photo" 
            className="card--image"/>
            <div className="card--text">
                <p>
                    <img src="./mark.png" /> {props.location.toUpperCase()} <a href={props.googleMapsUrl}>View on Google Maps</a>
                </p>
                <h2>{props.title}</h2>
                <p>{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
            
        </div>
    )
    
}