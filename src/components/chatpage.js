import "../App.css";
import MsgSlide from "./msg-slide";
import Data from "../data";

export default function Chatpage() {
  return (
    <div>
      <div className="page">
        {Data.map((item) => (
          <MsgSlide name={item.name} img={item.image} msg={item.message} />
        ))}
      </div>
    </div>
  );
}
