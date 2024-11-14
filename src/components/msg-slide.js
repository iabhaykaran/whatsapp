import "../App.css";
import {  Link } from "react-router-dom";

export default function MsgSlide(props) {
  return (
    <div>
      <li style={{ listStyle: "none" }}>
        <Link style={{ textDecoration: "none" }} to="/msg">
          <div className="slide">
            <div style={{ borderRadius: "100%" }}>
              <img src={props.img} alt="ahs" width="45px" height="45px" />
            </div>
            <div style={{ padding: "2px", marginLeft: "5px" }}>
              <h3>{props.name}</h3>
              <p>{props.msg}</p>
            </div>
          </div>
        </Link>
      </li>
    </div>
  );
}
