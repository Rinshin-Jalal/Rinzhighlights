import "./Highlights.css";
import { HashLink } from 'react-router-hash-link';

const Highlights = ({ highlights }) => {
  return (
    <div className="h">
      <div className="highlights">
        {highlights.map((highlight, index) => (
          <div className="highlight" key={index}>
            <HashLink title={highlight.title} to={`/video/${highlight.matchviewUrl.slice(41,-1)}#top`} >
            <img src={highlight.thumbnail} alt={highlight.title} />
            <h2>{highlight.title}</h2>
            <p>
              {highlight.competition} |{" "}
              <span>{highlight.date.slice(0, 10)}</span>
            </p>
            </HashLink>
          </div>
        ))}
      </div>
      <p className="big">...</p>
    </div>
  );
};

export default Highlights;
