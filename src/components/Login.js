import React from "react";
import { useState } from "react";
export default function Login() {
  const [state, setstate] = useState({
    name: "",
    userid: "",
    phone: "",
  })

  const myInit = {
    method: 'POST',
    body: state
  }


  function onchange(event) {

    let name = event.target.name
    let value = event.target.value
    console.log(value)

    setstate({ ...state, [name]: value })
  }
  const [values, setvalues] = useState({})
  const [res, setres] = useState("")
  const fetchData = async () => {
    const response = await fetch('https://transportkleit.herokuapp.com/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'name': state.name, 'userid': state.userid, 'phone': state.phone })
      })
    const data = await response.json()
    alert(data.response)
  }
  function submit(event) {
    event.preventDefault()
    setvalues(state)
    console.log(values)
    fetchData();
  }

  return (
    <div>
      <>
        <div className="container text-center" style={{
          marginTop: "7rem"
        }}>
          <form>
            <fieldset className="form-group p-3">
              <h2>Login.</h2>
              <div className="mb-3">
                <input
                  onChange={onchange}
                  type="name"
                  className="formcontrol"
                  id="exampleInputEmail1"
                  name="name"
                  placeholder="Username:"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={onchange}
                  type="name"
                  className="formcontrol"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="userid"
                  placeholder="UserID:"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={onchange}
                  type="number"
                  className="formcontrol"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="phone"
                  placeholder="Phone:"
                />
              </div>

              <button className="btn btn-primary" onClick={submit}>Submit</button>
              <p className="my-2"><a href="" style={{
                color: "#325282"
              }}>Register Here</a> If account not available</p>
            </fieldset>
          </form>
        </div>
        <div className="container"></div>
      </>
    </div>
  );
}
