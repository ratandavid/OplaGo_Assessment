import React from 'react'
import '../Card/css/card.css'


function Card(props) {
    let backcolor = 'blue-gradient';
    
    if (props.backcolor !== undefined)
    {
        backcolor = props.backcolor;
    }

    return (
        <div className="card">
        <img className="card-img-top" src={props.Image} alt="Card image cap"/>
        <div className={backcolor}>
                <i className="far fa-clock"></i> <span> {props.header} </span>
        </div>
        <div className="card-body">
            <h5 className="card-title">{props.Title}</h5>
            <hr/>
            <div className="my_icon">
                <i className="fab fa-youtube"></i><p className="card-text">{props.youtube_content}</p>
            </div>
                
            <div className="my_icon two-icons_margin">
                <i className="fas fa-bookmark"></i><p className="card-text mytxt">{props.bookmark_content}</p>
                <div className="my_icon bookmark">
                <i className="far fa-sticky-note"></i><p className="card-text">{props.notes}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card
