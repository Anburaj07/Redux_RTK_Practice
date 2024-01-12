import React from "react";
import styled from "styled-components";
import { useDeleteDoctorMutation } from "../redux/slices/DoctorApi";
import { useNavigate } from "react-router-dom";

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
}) => {
  const [deleteDoctor] = useDeleteDoctorMutation();
  const navigate=useNavigate();
  return (
    <DIV>
      <div className="flex-col items-center justify-items-center text-center ">
        <div>
          <img src={image} className="rounded" />
        </div>
        <h3 className="text-xl"> {name}</h3>
        <p className="text-lg">{specialization}</p>
        <p>Experience : {experience} yrs</p>
        <p>Location : {location}</p>
        <p>Date : {date}</p>
        <p>Slots : {slots}</p>
        <p>Fee : {fee}</p>
      </div>
      <BUTTONDIV>
        <button id="edit" className="bg-green-500 hover:bg-green-600 "
        onClick={() => navigate(`/onboard/edit/${_id}`)}
        >
          Edit
        </button>
        <button
          id="delete"
          className="bg-red-500 hover:bg-red-600"
          onClick={() => deleteDoctor(_id)}
        >
          Delete
        </button>
      </BUTTONDIV>
    </DIV>
  );
};

export default DoctorCard;

const DIV = styled.div`
  padding: 15px;
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
  button:hover {
    cursor: pointer;
  }
`;
