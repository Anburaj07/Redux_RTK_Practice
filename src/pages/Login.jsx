import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../redux/slices/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does't match!!!");
    } else {
      let obj = {
        email,
        password,
        confirmPassword,
      };
      dispatch(loginUser(obj));
      navigate("/dashboard")
      //   console.log(obj)
    }
  };
  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Enter Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="border-blue-500  w-[30%] m-auto mt-4" type="submit">
          Login
        </button>
      </form>
    </DIV>
  );
};

export default Login;

const DIV = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 40px;
  border-radius: 15px;
  padding: 2%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  form {
    display: flex;
    flex-direction: column;
    div {
      width: 60%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }
  }
  input {
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    color: gray;
    text-align: center;
  }
`;
