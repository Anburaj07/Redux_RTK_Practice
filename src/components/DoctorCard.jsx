import React from "react";
import styled from "styled-components";

const DoctorCard = ({
  _id,
  image,
  name,
  specialization,
  experience,
  location,
  date,
  slots,
  fee,
  handleDelete,
}) => {
  return (
    <DIV>
      <image src={image}></image>
      <h3>{name}</h3>
      <p>Specialization : {specialization}</p>
      <p>Experience : {experience}</p>
      <p>Location : {location}</p>
      <p>Date : {date}</p>
      <p>Slots : {slots}</p>
      <p>Fee : {fee}</p>
      <BUTTONDIV>
        <button id="edit">Edit</button>
        <button id="delete">Delete</button>
      </BUTTONDIV>
    </DIV>
  );
};

export default DoctorCard;

const DIV = styled.div`
  img {
    width: 100%;
  }
  padding-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  border-radius: 10px;
`;
const BUTTONDIV = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  button {
    width: 30%;
    padding: 10px;
    border-radius: 10px;
    color: white;
  }
  #edit {
    background-color: green;
  }
  #delete {
    background-color: red;
  }
  button:hover {
    cursor: pointer;
  }
`;
