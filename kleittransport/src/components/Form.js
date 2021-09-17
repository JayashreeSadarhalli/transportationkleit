import React from "react";
import "./form.css";

export default function Form() {
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
                type="email"
                className="formcontrol"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Bus Name
              </label>
              <input
                type="email"
                className="formcontrol"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          
          
              <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Date of Purchase:
            </label>
            <input
              type="date"
              className="formcontrol"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Insurance Date
            </label>
            <input
              type="date"
              className="formcontrol"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Registration No.
            </label>
            <input
              type="email"
              className="formcontrol"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              No. of Servicings done
            </label>
            <input
              type="email"
              className="formcontrol"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Initial Kilometre No.
            </label>
            <input
              type="email"
              className="formcontrol"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Latest Kilometre no.
            </label>
            <input
              type="email"
              className="formcontrol"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
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
          

          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
