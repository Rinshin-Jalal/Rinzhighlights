import "./Home.css";
import Highlights from "../../comps/Highlights/Highlights";

const Home = ({ highlights }) => {
  return (
    <div className="home" id="top">
      <h1>Latest Soccer Highlights</h1>
      <Highlights highlights={highlights} />
    </div>
  );
};

export default Home;
