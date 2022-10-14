import React from "react";
import { useState } from "react";

function Table(){

    const  guestData, setGuestData = []

    function fetchDetails(){
        fetch('/guests')
        .then(res => res.json())
        .then(json => json.guestData)
        // .then(guestData => setGuestData)
    }
    return (
        <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Region</th>
          <th>Memory</th>
          <th>CPUs</th>
          <th>Disk Size</th>
        </tr>
      </thead>
      <tbody>
      { (droplets.length > 0) ? droplets.map( (droplet, index) => {
           return (
            <tr key={ index }>
              <td>{ droplet.id }</td>
              <td>{ droplet.name }</td>
              <td>{ droplet.region.slug}</td>
              <td>{ droplet.memory }</td>
              <td>{ droplet.vcpus }</td>
              <td>{ droplet.disk }</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
    );
}

export default Table;