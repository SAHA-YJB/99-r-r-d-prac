import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  return (
    <div>
      홈<br />
      <button onClick={()=>{
        navigate('/works');
      }}>works로이동</button>
    </div>
  );
}

export default Home;
