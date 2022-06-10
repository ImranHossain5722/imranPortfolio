import React from "react";
import { Link } from "react-router-dom";
import imranImage from "../../../Assets/images/imranHossain.png";
import code from "../../../Assets/images/Coding-bro.svg";
import brainCode from "../../../Assets/images/codeBG.jpg";
import './HomeToperSection.css'


const HomeTopSection = () => {
  return (
    <div style={{
      background:`url(${brainCode})`,
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundRepeat: "no-repeat",
    }}
    
    >
      <div    
      class="hero min-h-screen bg-base-100 bg-opacity-70 ">
        <div class="hero-content text-center">
          <div class="">
            <h1 class="banner-title text-5xl font-bold pt-10">
              Designer, Front-end & React Developer{" "}
            </h1>
            <p class="py-6 text-xl">
              I design and code beautifully simple things, and I love what I do.
            </p>
            <div class="avatar">
              <div class="bounce-in-bck  w-80 rounded-full">
                <img src={imranImage} />
              </div>
            </div>
            <div className="m-5">

            <a  className="btn btn-primary  btn-outline btn-lg"  href="https://drive.google.com/file/d/1uNN0S4ZRsYU6wcds7DWTyjiTbBnF152n/view" rel="noopener noreferrer" target="_blank">My Resume</a>
              
            </div>

            {/* code image */}
            <div className="avatar">
              <div class=" w-96">
                <img className="" src={code} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopSection;
