import "../styles/main.css"
import Data from "./mainContainersAPI"
import Card from "./Card"
import "../styles/card.css"

export default function Main() {
    return (
        <div className="main">
            <div className="main-head">Let's Collaborate</div>
            <div className="main-parent" data-aos="slide-up">
                {
                    Data.map((el, key) => (
                        <Card keym={key} data={el} />
                    ))
                }
            </div>
        </div>
    )
}

// data-aos="slide-up"