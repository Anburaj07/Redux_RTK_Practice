import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Onboard = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [slots, setSlots] = useState("");
  const [fee, setFee] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    let obj = {
      name,
      image,
      specialization,
      experience,
      location,
      date: date.toLocaleDateString(),
      slots,
      fee,
    };
    console.log(obj);
    setLoading(true);
    fetch(`https://hospital-601o.onrender.com/doctors/appointments`, {
      // fetch(`http://localhost:8080/doctors/appointments`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        console.log(res);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (
    <DIV>
      <h2 className="text-2xl pb-4 text-[#0e1f75] font-medium">Onboard Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            placeholder="Enter Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label>Specialization</label>
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
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
            onChange={(e) => setExperience(+e.target.value)}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Slots</label>
          <input
            type="number"
            placeholder="Enter Slots"
            value={slots}
            onChange={(e) => setSlots(+e.target.value)}
          />
        </div>
        <div>
          <label>Fees</label>
          <input
            type="number"
            placeholder="Enter Fee"
            value={fee}
            onChange={(e) => setFee(+e.target.value)}
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
      {loading && <div>...Loading</div>}
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
