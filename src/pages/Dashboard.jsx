import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import { useGetDoctorsQuery } from "../redux/slices/DoctorApi";

const Dashboard = () => {
    const {data, isLoading, isSuccess }=useGetDoctorsQuery()
  return (
    <div>
      {isLoading && (
        <div className="text-center text-xl font-bold mt-10">
            <h1>Loading..</h1>
        </div>
      )}

        {/* <SELECTDIV>
          <select
            placeholder="Select Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Psychiatrist ">Psychiatrist </option>
          </select>
        </SELECTDIV> */}
      <DIV>
        {data?.map((el) => {
          return (
            <DoctorCard key={el._id} {...el} />
          );
        })}
      </DIV>
    </div>
  );
};

export default Dashboard;

const DIV = styled.div`
  display: grid;
  width: 90%;
  margin: auto;
  margin-top: 50px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const SELECTDIV=styled.div`
 width: 60%;
 margin: auto;
 margin-top: 15px;
 font-size: 18px;
 background-color: white;
 select{
     border-radius: 15px;
 }
 border-radius: 15px;
`
