//iterate over this file through map in homePage.js
// import React from "react";
import Employee from "./employee";

export default function Items({ name, title, img }) {
  return (
    <div className="map">
      <Employee name={name} title={title} img={img} />

    </div>
  );
}
