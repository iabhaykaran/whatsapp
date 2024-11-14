import "../App.css";
import StorySlide from "./story-slide";
import StoryData from "../Story-data";
export default function Updatepage(props) {
  return (
    <div className="page">

      {StoryData.map((item) => (
        <StorySlide name={item.name} img={item.image}  bgimg={item.story} />
      ))}
    </div>
  );
}
