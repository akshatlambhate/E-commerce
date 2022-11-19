import React, { useState } from "react";
import loginimg from "../../assets/LoginForm.jpg";
import { useEffect } from "react";
import { axiosInstance } from "../../utils/apiFetch";

const LoginForm = () => {
  let [userEmail, setUserEmail] = useState("");
  let [password, setPassword] = useState("");
  
  const LoginSubmit = async (e) => {
    e.preventDefault();
    let item = {userEmail,password}
    // const userdata = await fetch("https://dp-backend-e-comm.herokuapp.com/api/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     userEmail: item.userEmail, password: item.password
    //   })
    // });

    // const res = await userdata.json();
    // console.log(res);
    // let token = res.data.accessToken;
    // localStorage.setItem("token", JSON.stringify(token));

    const response = await axiosInstance.post('/auth/login', item);
    console.log(response);
    let token = response.data.data.accessToken;
    localStorage.setItem("token", JSON.stringify(token));

  };
 
  return (
    <div className="flex mx-auto shadow-2xl shadow-slate-500  bg-gray-50 w-fit">
    <div  className="shadow-2xl flex flex-col align-middle w-fit px-10 py-5">
        <div className="py-3">
            <h1 className="font-bold text-3xl font-serif">Login to Electric Nest</h1>
        </div>
      <form className="flex flex-col ">
        <label className="text-lg font-mono text-slate-800 font-semibold ">Enter UserEmail </label>
        <input className="py-4 px-4 shadow-lg border-t-2 border-gray-300 my-2 rounded-sm focus:outline-none"
          type="text"
          value={userEmail}
          autoComplete="null"
          placeholder="Enter Username"
          onChange={(e) => {
              setUserEmail(e.target.value);   
            }}
            
        ></input>
            <label className="text-lg font-mono text-slate-800 font-semibold">Enter Password</label>
        <input
        className="py-4 px-4 shadow-lg border-t-2 border-gray-300 my-2 rounded-sm focus:outline-none"
          type="text"
          value={password}
          autoComplete="null"
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={LoginSubmit} className="bg-gray-900 py-3 w-fit px-10 mt-5 shadow-md shadow-slate-700 text-white hover:bg-buttonhover hover:text-black"> Submit</button>
      </form>
    </div>
    <div className="">
      <img src={loginimg} className="w-64" />
    </div>
    </div>
  );
};

export default LoginForm;
