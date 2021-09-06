import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "./Video.css";
import Highlights from "../../comps/Highlights/Highlights";

const Video = ({ highlights }) => {
  const id = useParams();

  return (
    <div className="videodiv">
      {highlights
        .filter(
          (highlight) =>
            highlight.matchviewUrl ===
            `https://www.scorebat.com/embed/matchview/${id.id}/`
        )
        .map((fhighlight, index) => (
          <div className="main" id="top" key={index}>
            <h1>{fhighlight.title}</h1>
            <p>
              {fhighlight.competition} |{" "}
              <span>{fhighlight.date.slice(0, 10)}</span>
            </p>
            <div className="videos">
              {fhighlight.videos.map((video, index) => (
                <div className="video" key={index}>
                  {parse(video.embed)}
                  <h3>`{video.title}`</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      <h2 className="more">Latest highlights👇</h2>
      <Highlights
        highlights={highlights
          .filter(
            (highlight) =>
              highlight.matchviewUrl !==
              `https://www.scorebat.com/embed/matchview/${id.id}/`
          )
          .slice(0, 6)}
      />
    </div>
  );
};

export default Video;
