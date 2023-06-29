import React from "react";
import { Link } from "react-router-dom";
import { data } from "../shared/data";

function Works() {
  return (
    <div>
      <h3>할일목록</h3>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            width: "100px",
            height: "100px",
            border: "1px solid red",
            margin: "10px",
          }}
        >
          {item.id} &nbsp;
          <Link to={`/works/${item.id}`}>
          {item.todo}
          </Link>
          
        </div>
      ))}
    </div>
  );
}

export default Works;
