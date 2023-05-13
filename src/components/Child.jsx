import "../styles/child.css"
import Card2 from "./Card2"
export default function Child(props) {
    return (
        <div className="child">
            <div className="child-nav">{props.data.nav}</div>
            <div className="child-image" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)),url(${props.data.image})` }}>
                <div className="child-image-head">{props.data.mainhead}</div>
                <div className="child-image-subhead">{props.data.normalhead}</div>
            </div>
            <div className="child-datathree">
                <div className="child-datathree-ins0">{props.data.data1}</div>
                <div className="child-datathree-ins1">{props.data.data2}</div>
                <div className="child-datathree-ins2">{props.data.data3}</div>
            </div>
            <div className="child-body">{props.data.body}</div>
            <div className="child-button">Get In Touch</div>
            <div className="child-subhead">Capabilities</div>
            <div className="child-parent">
                {
                    props.data.capabilities.map((el, keyn) => (
                        <Card2 data={el} keyn={keyn} />
                    ))
                }
            </div>
        </div>
    )
}