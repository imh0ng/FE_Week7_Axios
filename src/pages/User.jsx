/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
    const { userId } = useParams();

    const [userInfo, setUserInfo] = useState({
        avatar: "",
        email: "",
        first_name: "",
        id: 0,
        last_name: "",
      });
      useEffect(() => {
        axios
          .get(`https://reqres.in/api/users/${userId}`)
          .then((res) => {
            setUserInfo(res.data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }, []);

    return (
        <>
            <h1>User Information</h1>
            <img src={userInfo.avatar} />
            <h3>email : {userInfo.email}</h3>
            <h3>
                {userInfo.first_name} {userInfo.last_name}
            </h3>
            <Link to="/List">리스트 페이지로 고고</Link>
        </>
    );
};

export default User;