import React from "react";
import "./form.css";
import { useState } from "react";
import Display from "./Display";

export default function Form() {
  const [details, setdetails] = useState({
    modelNo: "",
    vehicleName: "",
    purchaseDate: "",
    insuDate: "",
    regNo: "",
    service: "",
    kilometre: "",
    latestKm: "",
  });

  const [display, setdisplay] = useState({});

  function onchange(event) {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);

    setdetails({ ...details, [name]: value });
  }

  function submit(event) {
    event.preventDefault();

    setdisplay(details);
  }

  return (
    <>
      <div className="container my-4">
        <form>
          <fieldset className="form-group p-3">
            <legend className="w-auto mx-0">Vehicle Details</legend>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Bus Model No.
              </label>
              <input
                value={details.modelNo}
                onChange={onchange}
                type="email"
                className="formcontrol"
                id="exampleInputEmail1"
                name="modelNo"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Bus Name
              </label>
              <input
                value={details.vehicleName}
                onChange={onchange}
                type="email"
                className="formcontrol"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="vehicleName"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Date of Purchase:
              </label>
              <input
                value={details.purchaseDate}
                onChange={onchange}
                type="date"
                className="formcontrol"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="purchaseDate"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Insurance Date
              </label>
              <input
                value={details.insuDate}
                onChange={onchange}
                type="date"
                className="formcontrol"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="insuDate"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Registration No.
              </label>
              <input
                value={details.regNo}
                onChange={onchange}
                type="email"
                className="formcontrol"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="regNo"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                No. of Servicings done
              </label>
              <input
                value={details.service}
                onChange={onchange}
                type="email"
                className="formcontrol"
                id="exampleInputEmail1"
                name="service"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Initial Kilometre No.
              </label>
              <input
                value={details.kilometre}
                onChange={onchange}
                className="formcontrol"
                id="exampleInputEmail1"
                name="kilometre"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Latest Kilometre no.
              </label>
              <input
                value={details.latestKm}
                onChange={onchange}
                className="formcontrol"
                id="exampleInputEmail1"
                name="latestKm"
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
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
        <Display
          modelNo={display.modelNo}
          vehicleName={display.vehicleName}
          purchaseDate={display.purchaseDate}
          insuDate={display.insuDate}
          regNo={display.regNo}
          service={display.service}
          kilometre={display.kilometre}
          latestKm={display.latestKm}
        />
      </div>
    </>
  );
}
