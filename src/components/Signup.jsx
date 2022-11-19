import React, { useState } from "react";
import signimg from '../assests/Signupimg.jpg'
import { SignupData } from "../utils/SignupPageData";


const Signup = (e) => {
      const initialState = {
         fullname:'',
         email:'',
         contact:'', 
         address:'',
         password:'',
      }
  const [value ,setValue] = useState(initialState);


  const LoginSubmit = (e) => {
    e.preventDefault();
    // console.log(fullname,email,contact,address,password);
    console.log(value)

  };
  const handleChange=(e)=>{
    setValue({...value,[e.target.name]:e.target.value})
    // console.log(value)
  }
  return (<>
    <div className="lg:flex lg:flex-row mx-auto mt-5 shadow-2xl shadow-slate-500  bg-gray-50 w-fit 
    xs:flex xs:flex-col">
    <div  className="shadow-2xl flex flex-col align-middle w-fit px-10 py-5">
        <div className="py-3">
            <h1 className="font-bold text-3xl font-serif">Sign Up for Electric Nest</h1>
        </div>
        <form className="flex flex-col ">
         {SignupData.map((data)=>(
          <>
          <label className="text-lg font-mono text-slate-800 font-semibold "> {data.label} </label>
          <input className="py-4 px-4 shadow-lg border-t-2 border-gray-300 my-2 rounded-sm focus:outline-none"
          type={data.type}
          name={data.name}
          value={value.name}
          autoComplete="null"
        placeholder={data.palceholder}
          onChange={handleChange}   
        />
          </> 
            ))}
        

        <button onClick={LoginSubmit} className="bg-gray-900 py-3 w-fit px-10 mt-5 shadow-md shadow-slate-700 text-white hover:bg-buttonhover hover:text-black"> 
        Submit
        </button>
        </form>
        
        <h1
        className="mt-4 hover:text-red-600"><a href="">Already have an account? please Login</a></h1>
        </div>
    <div className="">
      <img src={signimg} className="w-signup" />
    </div>
    </div>
  </>

  );

}

export default Signup
