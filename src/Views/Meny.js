import React, { Component } from "react";
import MenuNav from "../Components/MenuNav";
import images from "../images";
let { menuPhoto } = images;

class Meny extends Component {
  render() {
    return (
      <div className="">
        <div className="container content mb-5 ">
          <MenuNav className="" />
        </div>
      </div>
    );
  }
}

export default Meny;
