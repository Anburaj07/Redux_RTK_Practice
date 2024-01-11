import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <DIV>
      <form>
        <div>
            <label>Email Address</label>
          <input type="email" placeholder="Enter Email Address" />
        </div>
        <div>
            <label>Password</label>
          <input type="password" placeholder="Enter Password" />
        </div>
        <div>
            <label>Confirm Password</label>
          <input type="password" placeholder="Enter Confirm Password" />
        </div>
          <button className="border-blue-500  w-[30%] m-auto mt-4" type="submit">Login</button>
      </form>
    </DIV>
  );
};

export default Login;

const DIV=styled.div`
width: 50%;
margin: auto;
margin-top:40px;
border-radius: 15px;
padding: 2%;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
form{
    display: flex;
    flex-direction: column;
    div{
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
}
    input{
        background-color:white;
        border: 1px solid black;
        border-radius: 5px;
        color: gray;
        text-align: center;
    }
`