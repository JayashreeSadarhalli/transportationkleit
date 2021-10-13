import React from 'react'
import { Link } from 'react-router-dom'
export default function Askuser() {
    return (
        <div className="main" style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "150px",
            border: "1px solid transparent",
            boxShadow: "0 0 20px 3px #00000091",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "30px",
            borderRadius: "13px",
            backgroundColor: "aliceblue",
            color:"#104190"
            


        }}>
            <p style={{
                marginTop:"10px",
                fontWeight:"bold",
                color:"#104190ad"

            }}>Who Are You?</p>
            <div className="button" style={
                {
                    display:"flex",
                    justifyContent:"space-around"
                }
            }>
                <Link to="/Login"><button className="btn btn-primary">Admin.</button></Link>
                <Link to="/Login"><button className="btn btn-primary">User.</button></Link>

                
            </div>
        </div>
    )
}
