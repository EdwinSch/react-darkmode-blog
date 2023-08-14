import React from "react";
import moment from "moment";
const Article = ({ id, title, date, length, snippet }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>date here</span>
        <span>{length} minutes read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
