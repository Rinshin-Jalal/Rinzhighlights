import qs from "qs";
import { useLocation } from "react-router-dom";
import Highlights from "../../comps/Highlights/Highlights";
import { useState, useEffect } from "react";
import Helmet from "react-helmet"

const Search = ({ highlights }) => {
  let se = qs.parse(useLocation().search, { ignoreQueryPrefix: true }).q;

  const [results, setResults] = useState(``);

  const filteredHighlights = highlights.filter((highlight) => {
    return (
      highlight.title
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(se.toLowerCase().replace(/\s+/g, "")) ||
      highlight.competition
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(se.toLowerCase().replace(/\s+/g, ""))
    );
  });
  useEffect(() => {
    if (filteredHighlights.length > 0) {
      setResults(`search result for "${se}"`);
    } else {
      setResults(`Sorry ,We don't have that`);
    }
  }, [filteredHighlights.length, se]);

  return (
    <div className="search">
      <Helmet>
        <title>Search: {se} | RinzHighlights</title>
      </Helmet>
      <h1 style={{ color: "#fff", textAlign: "center" }}>{results}</h1>
      <Highlights highlights={filteredHighlights} />
    </div>
  );
};

export default Search;
