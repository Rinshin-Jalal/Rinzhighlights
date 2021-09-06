import "./Home.css";
import Highlights from "../../comps/Highlights/Highlights";
import Helmet from "react-helmet";

const Home = ({ highlights }) => {
  return (
    <div className="home">
      <Helmet>
        <meta
          name="description"
          content="Watch latest soccer highlights via RinzHighlights"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="RinzHighlights | Rinshin Jalal" />
        <meta
          property="og:description"
          content="Watch latest soccer highlights via RinzHighlights"
        />
        <meta property="og:url" content="https://www.rinzhin.net/" />
        <meta property="og:site_name" content="Rinshin Jalal" />
        <meta name="twitter:title" content="RinzHighlights | Rinshin Jalal" />
        <meta
          name="twitter:description"
          content="Watch latest soccer highlights via RinzHighlights"
        />
      </Helmet>
      <h1  id="top">RinzHighlights</h1>
      <h3>Latest Soccer Highlights</h3>
      <Highlights highlights={highlights} />
    </div>
  );
};

export default Home;
