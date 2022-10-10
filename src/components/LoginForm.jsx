import React, { useState } from "react";

const LoginForm = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const LoginSubmit = (e) => {
    e.preventDefault();
    if (username==='akshat'&& password ==='aakanksha') {
        return (<div>
               Login SuccessFull
        </div>
      )
        
    }
    else{
       return (<div>
          Login Failed
       </div>)
    }
  };
 
  return (
    <div  className="border-2 border-black mx-auto w-fit px-10 py-5">
        <div className="py-3">
            <h1 className="font-bold text-3xl shadow-md font-serif">Login to Electric Nest</h1>
        </div>
      <form className="flex flex-col items-center ">
        <label>Enter Username </label>
        <input className="py-2 px-4 border-black border-2 my-2 rounded-sm focus:outline-none"
          type="text"
          value={username}
          autoComplete="null"
          placeholder="Enter Username"
          onChange={(e) => {
              setUsername(e.target.value);
              
            }}
            
        ></input>
            <label>Enter Password</label>
        <input
        className="py-2 px-4 border-black border-2 my-2 rounded-sm focus:outline-none"
          type="text"
          value={password}
          autoComplete="null"
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={LoginSubmit} className="bg-button px-14 py-3 mt-5 rounded-lg border-gray-800 border-2 text-white hover:bg-buttonhover hover:text-black"> Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
