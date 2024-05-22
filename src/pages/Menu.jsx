import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();

    return(
      <>
        <h1>Menu Page</h1>
        <button onClick={() => navigate("/")}> GO HOME </button>
        <button onClick={() => navigate("/list")}> GO LIST </button>
      </>
    );
};

export default Menu;