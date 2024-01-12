import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../redux/slices/loginSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useAddUserMutation } from "../redux/slices/DoctorApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [addUser] = useAddUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does't match!!!");
    } else {
      let obj = {
        email,
        password,
      };
      let data = addUser(obj);
      data.then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("login Successfull!!");
        dispatch(loginUser(obj));
        navigate("/dashboard");
        // console.log(res,'res')
      });
    }
  };
  return (
    <DIV>
      <h2 className="text-2xl pb-4 text-[#0e1f75] font-medium">User Login</h2>
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
        <button className="border-gray-800  w-[30%] m-auto mt-4" type="submit">
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
  margin-bottom: 280px;
  text-align: center;
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
    color: black;
    text-align: center;
  }
`;
