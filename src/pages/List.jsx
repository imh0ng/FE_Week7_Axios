/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Card from "../components/Card";

const List = () => {
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${pageNum}&per_page=9`)
      .then((res) => {
        setUserList(res.data.data);
        setTotalPage(res.data.total_pages);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [pageNum]);

  const renderingPagination = () => {
    const result = [];
    for (let i = 1; i <= totalPage; i++) {
      result.push(
        <span key={i} onClick={() => setPageNum(i)} style={{ cursor: 'pointer', margin: '0 5px' }}>
        {i}
      </span>
      );
    }
    return result;
  };

  return (
    <>
      <h1>List Page</h1>
      {userList.length > 0 ? (
        <Grid>
          {userList.map((user, idx) => (
            <Card key={idx} img={user.avatar} name={`${user.first_name} ${user.last_name}`} id={user.id} />
          ))}
        </Grid>
      ) : (
        <p>No users found</p>
      )}
      <Pagination>
        {renderingPagination()}
      </Pagination>
      <Link to="/menu">메뉴 페이지로 고고</Link>
    </>
  );
};

export default List;

const Grid = styled.div`
  display: grid;
  grid-gap: 4px; 
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  align-items: center; 
  justify-content: space-around;
`

const Pagination = styled.div`

`
