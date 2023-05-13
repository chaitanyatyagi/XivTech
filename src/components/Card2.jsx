import "../styles/childcard.css"

export default function Card2(props) {
    return (
        <div className="childcard">
            <div className="childcard-img" style={{ backgroundImage: `url(${props.data.image})` }}></div>
            <div className="childcard-data">{props.data.data}</div>
        </div>
    )
}