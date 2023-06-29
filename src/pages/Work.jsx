import React from "react";
import { useParams } from "react-router";
import { data } from "../shared/data";
function Work() {
  const paramas = useParams();
  console.log(paramas);

  const foundData = data.find((item) => item.id === parseInt(paramas.id));
  console.log("foundData", foundData);
  return <div>
    <h3>{foundData.todo}</h3>
  </div>;
}

export default Work;
