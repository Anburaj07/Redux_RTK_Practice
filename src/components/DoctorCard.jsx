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
      <div className="flex-col items-center justify-items-center text-center">
        <div>
          <img src={image} />
        </div>
        <h3 className="text-xl"> {name}</h3>
        <p className="text-lg">{specialization}</p>
        <p>Experience : {experience} patients</p>
        <p>Location : {location}</p>
        <p>Date : {date}</p>
        <p>Slots : {slots}</p>
        <p>Fee : {fee}</p>
      </div>
      <BUTTONDIV>
        <button id="edit">Edit</button>
        <button id="delete">Delete</button>
      </BUTTONDIV>
    </DIV>
  );
};

export default DoctorCard;

const DIV = styled.div`
  padding: 15px;
  border: 1px solid red;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  border-radius: 10px;
  div {
    img {
      width: 70%;
      margin: auto;
    }
  }
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
