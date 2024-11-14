import "../App.css";

export default function Callspage(props) {
  return (
    <div className="page">
      <div className="slide">
        <div style={{ borderRadius: "100%" }}>
          <img src={props.img} alt="ahs" width="50px" height="50px" />
        </div>
        <div style={{ padding: "8px" }}>
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  );
}
