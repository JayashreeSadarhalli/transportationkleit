import React from "react";

export default function Display() {
  return (
    <>
      <table class="table">
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
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Bus Name:</td>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Date Of Purchase:</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Insurance Date</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Registration No.</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>No. Of Servicings done:</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Initial KM No.:</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Latest KM No.:</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
