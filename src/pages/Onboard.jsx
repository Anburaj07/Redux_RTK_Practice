import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddDoctorMutation,
  useEditDoctorMutation,
  useGetDoctorByIdQuery,
} from "../redux/slices/DoctorApi";

const Onboard = () => {
  const [loading, setLoading] = useState(false);
  const date = new Date();
  const [doctor, setDoctor] = useState({
    name: "",
    image: "",
    specialization: "",
    experience: "",
    location: "",
    date: date.toLocaleDateString(),
    slots: "",
    fee: "",
  });

  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const { data } = useGetDoctorByIdQuery(id);
  const [editDoctor] = useEditDoctorMutation();
  const [addDoctor]=useAddDoctorMutation();

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name == "experience" || name == "slots" || name == "fee") {
      value = Number(value);
    }
    setDoctor({
      ...doctor,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(doctor);

    if(isEditing){
      editDoctor({id,...doctor});
      alert("Doctor Appoinment Updated successfully!")
    }else{
      addDoctor(doctor)
      alert("Doctor Appoinment Added successfully!")
    }
    setIsEditing(false);
    navigate("/dashboard")
  };

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      setDoctor({ ...data });
    } else {
      setIsEditing(false);
    }
  }, [id, data]);

  const { name, image, fee, slots, specialization, experience, location } =
    doctor;

  return (
    <DIV>
      <h2 className="text-2xl pb-4 text-[#0e1f75] font-medium">
        {" "}
        {isEditing ? "Edit" : "Onboard"} Doctor
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            placeholder="Enter Image URL"
            value={image}
            name="image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Specialization</label>
          <select
            value={specialization}
            name="specialization"
            onChange={handleChange}
          >
            <option value="">Select Specialization</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Psychiatrist ">Psychiatrist </option>
          </select>
        </div>
        <div>
          <label>Experience</label>
          <input
            type="number"
            placeholder="Enter Experience"
            value={experience}
            name="experience"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            name="location"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Slots</label>
          <input
            type="number"
            placeholder="Enter Slots"
            value={slots}
            name="slots"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fees</label>
          <input
            type="number"
            placeholder="Enter Fee"
            value={fee}
            name="fee"
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="hover:bg-blue-600 hover:text-[#fafbff]"
          >
            Submit
          </button>
        </div>
      </form>
      {/* {loading && <div>...Loading</div>} */}
    </DIV>
  );
};

export default Onboard;

const DIV = styled.div`
  background-color: whitesmoke;
  text-align: center;
  width: 35%;
  margin: auto;
  margin-top: 80px;
  padding: 2%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  form {
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      margin-bottom: 10px;
    }
  }
  input,
  select {
    text-align: center;
    border: 1px solid blue;
    border-radius: 5px;
    width: 60%;
  }
  button {
    border: 1px solid gray;
    margin: auto;
  }
  h3 {
    color: #1a237e;
  }
`;
