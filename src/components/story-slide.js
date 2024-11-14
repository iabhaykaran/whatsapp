import "../App.css";

export default function StorySlide(props) {
  return (
    <div>
      <div
        className="slide  story"
        style={{
          backgroundImage: `url(${props.bgimg})`,
          backgroundPosition: "cover",
          backgroundSize: "360px",
          backdropFilter: "blur(550px)",
        }}
      >
        <div
          style={{
            borderRadius: "100%",
          }}
        >
          <img src={props.img} alt="ahs" width="55px" height="55px" />
        </div>
        <div style={{ padding: "8px" }}>
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  );
}
