import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Display(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bus Model:</td>
            <td>{props.modelNo}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Bus Name:</td>
            <td>{props.vehicleName}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Date Of Purchase:</td>
            <td>{props.purchaseDate}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Insurance Date</td>
            <td>{props.insuDate}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Registration No.</td>
            <td>{props.regNo}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>No. Of Servicings done:</td>
            <td>{props.service}</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Initial KM No.:</td>
            <td>{props.kilometre}</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Latest KM No.:</td>
            <td>{props.latestKm}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
