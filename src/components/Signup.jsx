import React, { useState } from "react";
import signimg from '../assests/Signupimg.jpg'


const Signup = () => {
  const initialState={
     fullname: '',
     email: '',
     contact: '',
     address: '',
     password: ''
  }
  const [value,setValue]=useState(initialState);

  // let [fullname, setFullname] = useState("");
  // let [email, setEmail] = useState("");
  // let [contact, setContact] = useState("");
  // let [address, setAddress] = useState("");
  // let [password, setPassword] = useState("");

  const LoginSubmit = (e) => {
    e.preventDefault();
    console.log(fullname,email,contact,address,password);
   
  };
  const handleSubmit = (e) => {

    // e.preventDefault();
    // console.log(fullname,email,contact,address,password);
   
  };
  return (
    <div className="flex mx-auto mt-5 shadow-2xl shadow-slate-500  bg-gray-50 w-fit">
    <div  className="shadow-2xl flex flex-col align-middle w-fit px-10 py-5">
        <div className="py-3">
            <h1 className="font-bold text-3xl font-serif">Sign Up for Electric Nest</h1>
        </div>
      <form className="flex flex-col ">
        <label className="text-lg font-mono text-slate-800 font-semibold "> {}</label>
        <input className="py-4 px-4 shadow-lg border-t-2 border-gray-300 my-2 rounded-sm focus:outline-none"
          type="text"
          value={fullname}
          autoComplete="null"
          placeholder="Enter Full Name"
          onChange={handleSubmit}
            
        ></input>
         <label className="text-lg font-mono text-slate-800 font-semibold "> Email </label>
        <input className="py-4 px-4 shadow-lg border-t-2 border-gray-300 my-2 rounded-sm focus:outline-none"
          type="text"
          value={email}
          autoComplete="null"
          placeholder="Enter your Mail Address"
          onChange={(e) => {
              setEmail(e.target.value);   
            }}
            
        ></input>
         <label className="text-lg font-mono text-slate-800 font-semibold "> Contact Number </label>
        <input className="py-4 px-4 shadow-lg border-t-2 border-gray-300 my-2 rounded-sm focus:outline-none"
          type="text"
          value={contact}
          autoComplete="null"
          placeholder="Mobile Number"
          onChange={(e) => {
              setContact(e.target.value);   
            }}
            
        ></input>
         <label className="text-lg font-mono text-slate-800 font-semibold ">  Address Details </label>
        <input className="py-4 px-4 shadow-lg border-t-2 border-gray-300 my-2 rounded-sm focus:outline-none"
          type="text"
          value={address}
          autoComplete="null"
          placeholder="Add your Address Details"
          onChange={(e) => {
              setAddress(e.target.value);   
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
        <h1
        className="mt-4 hover:text-red-600"><a href="">Already have an account? please Login</a></h1>
      </form>
    </div>
    <div className="">
      <img src={signimg} className="w-signup" />
    </div>
    </div>
  );

}

export default Signup
