/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [userInfo, setUserInfo] = useState({
    avatar: "",
    email: "",
    first_name: "",
    id: 0,
    last_name: "",
  });
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${1}`)
      .then((res) => {
        setUserInfo(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <img src={userInfo.avatar} />
      <h3>email : {userInfo.email}</h3>
      <h3>
        {userInfo.first_name} {userInfo.last_name}
      </h3>
      <Link to="/menu">메뉴 페이지로 고고</Link>
    </>
  );
};

export default Home;
