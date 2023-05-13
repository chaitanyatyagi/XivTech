import "../styles/card.css"
import { Link } from "react-router-dom"

export default function Card(props) {

    return (
        <div className="cards" >
            <div className="card-left">
                <h2 className="card-left-head">{props.data.head}</h2>
                <h3 className="card-left-body">{props.data.body}</h3>
                <Link to={`/${props.keym}`} className="card-left-button">
                    <div className="card-left-button-text">{props.data.button}</div>
                    <div className="card-left-button-icon"></div>
                </Link>
            </div>
            <div className="card-right" style={{ backgroundImage: `url(${props.data.image})` }}></div>
            <h3 className="card-left-bodym">{props.data.body}</h3>
            <Link to={`/${props.keym}`} className="card-left-buttonm">
                <div className="card-left-button-text">{props.data.button}</div>
                <div className="card-left-button-icon"></div>
            </Link>
        </div>
    )
}