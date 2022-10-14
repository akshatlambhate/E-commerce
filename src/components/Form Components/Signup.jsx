import React, { useState } from "react";
import signimg from '../../assets/Signupimg.jpg'
import { SignupData } from "../../utils/SignupPageData";


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

    console.log(value)

  };
  const handleSubmit=(e)=>{
    setValue({...value,[e.target.name]:e.target.value})
    
  }
  return (
    <div className="flex mx-auto mt-5 shadow-2xl shadow-slate-500  bg-gray-50 w-fit">
    <div  className="shadow-2xl flex flex-col align-middle w-fit px-10 py-5">
        <div className="py-3">
            <h1 className="font-bold text-3xl font-serif">Sign Up for Electric Nest</h1>
        </div>
        <div>
        {SignupData.map((data)=>(
          <form className="flex flex-col ">
          <label className="text-lg font-mono text-slate-800 font-semibold "> {data.label} </label>
          <input className="py-4 px-4 shadow-lg border-t-2 border-gray-300 my-2 rounded-sm focus:outline-none"
          type={data.type}
          name={data.name}
          value={value.fullname}
          autoComplete="null"
        placeholder={data.palceholder}
          onChange={handleSubmit}
            
        ></input>
          </form>
        ))}
        </div>
  
    </div>
    <div className="">
      <img src={signimg} className="w-signup" />
    </div>
    </div>
  );

}

export default Signup
