import React from "react";
import "./form.css";
import { useState } from "react";
//import Display from "./Display";
import { Link } from "react-router-dom";


export default function Form(props) {
  const [details, setdetails] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    password: "",
    repassword: "",
  
  });

  const [display, setdisplay] = useState({});

  function onchange(event) {
    let name = event.target.name;
    let value = event.target.value;
    //console.log(name, value);

    setdetails({ ...details, [name]: value });
  }

  function submit(event) {
    event.preventDefault();

    setdisplay(details);

    console.log(display)
  }

  return (
    <>
      <div className="container text-center">
        <form>
          <fieldset className="form-group p-3">
            <h2>Register.</h2>
            <div className="mb-3">
              
              <input
                value={details.name}
                onChange={onchange}
                type="name"
                className="formcontrol"
                id="exampleInputEmail1"
                name="name"
                placeholder="Name:"
              />
            </div>
            <div className="mb-3">
              
              <input
                value={details.email}
                onChange={onchange}
                type="email"
                className="formcontrol"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                placeholder="E-mail:"
              />
            </div>
            <div className="mb-3">
             
              <input
                value={details.phone}
                onChange={onchange}
                type="number"
                className="formcontrol"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="phone"
                placeholder="Phone:"
              />
            </div>
            <div className="mb-3">
              
              <input
                value={details.designation}
                onChange={onchange}
                type="name"
                className="formcontrol"
                id="exampleInputEmail1"
                name="designation"
                placeholder="Designation:"
              />
            </div>
            <div className="mb-3">
              
              <input
                value={details.password}
                onChange={onchange}
                className="formcontrol"
                id="exampleInputEmail1"
                name="password"
                placeholder="Password:"
                type="password"
              />
            </div>
            <div className="mb-3">
              <input
                value={details.repassword}
                onChange={onchange}
                className="formcontrol"
                id="exampleInputEmail1"
                name="repassword"
                placeholder="Re-enter Password:"
                type="password"
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input mx-2"
                id="exampleCheck1"
                style={{
                  float:"none"
                }}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Verify Details ?
              </label>
            </div>

            <button onClick={submit} className="btn btn-primary">
              Submit
              
              
            </button>
          </fieldset>
        </form>
      </div>
     <div className="container"> 
        
      </div>
    </>
  );
}
