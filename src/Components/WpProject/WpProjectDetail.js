import React from "react";
import banner from "../../Assets/images/agancy.jpg";
import Image from "../../Assets/images/agancy.jpg";
import pages from "../../Assets/images/ProjectDetail/pages.jpg";
import mobile from "../../Assets/images/ProjectDetail/tabMobile.jpg";
import tablet from "../../Assets/images/ProjectDetail/tablet.jpg";
import Lastpage from "../../Assets/images/ProjectDetail/2page.jpg";
import laptop from "../../Assets/images/ProjectDetail/laptop.jpg";

const WpProjectDetail = () => {
    return (
        <div>
      <div
        style={{
          background: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        class="hero min-h-screen"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-3xl text-white font-bold">
              {" "}
              techntag
            </h1>
            <p class="mb-5 text-white">
              This is a full wordpress CMS build project
            </p>
            <a
              className="btn btn-primary btn-lg"
              href="https://drive.google.com/file/d/1uNN0S4ZRsYU6wcds7DWTyjiTbBnF152n/view"
              rel="noopener noreferrer"
              target="_blank"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>

      <div className="pt-1">
        <h1 className="pt-12 text-center text-4xl font-bold uppercase ">
          My Project
        </h1>
        <p className="p-2 text-base font-semibold ">
          Here are some images of my project.
          <a className="text-blue-500" href="mailto:imranhossain.web@gmail.com">
            Email me
          </a>{" "}
        </p>
        <progress class="progress progress-primary w-16 h-1 "></progress>
      </div>

      <div class="grid lg:grid-cols-3  gap-4 mx-16 justify-items-center pt-11">
        <div class="card lg:card bg-base-100 shadow-xl">
          <figure>
            <img className="w-96" src={Image} alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary ">Responsive</p>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div class="card lg:card bg-base-100 shadow-xl">
          <figure>
            <img className="w-96" src={pages} alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary "> All section  </p>
            </div>
          </div>
        </div>
        {/* 3rd */}

        <div class="card lg:card bg-base-100 shadow-xl">
          <figure>
            <img className="w-96" src={mobile} alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary ">Mobile view </p>
            </div>
          </div>
        </div>
        {/* 4th */}
        <div class="card lg:card bg-base-100 shadow-xl">
          <figure>
            <img className="w-96" src={laptop } alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary ">Laptop view</p>
            </div>
          </div>
        </div>
        {/* 5th */}
        <div class="card lg:card bg-base-100 shadow-xl">
          <figure>
            <img className="w-96" src={tablet} alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary ">Tablet View</p>
            </div>
          </div>
        </div>
        {/* 6th */}
        <div class="card lg:card bg-base-100 shadow-xl">
          <figure>
            <img className="w-96" src={Lastpage} alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary "> plane section</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 mx-12 lg:mx-auto my-10">
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <div class="card-body">
            <div className="pt-1">
              <h1 className="pt-12 text-center lg:text-4xl font-bold uppercase ">
                Project Summery
              </h1>

              <progress class="progress progress-primary w-16 h-1 "></progress>
            </div>
            <h2 class=" text-left">
              <ul>
                <li>
                  {" "}
                  <span className="text-primary font-bold">*-* </span>{" "}
                  <span className="font-bold"> Project Name:</span> techntag
                </li>
                <li>
                  {" "}
                  <span className="text-primary font-bold">*-* </span>{" "}
                  <span className="font-bold"> Project Features: </span>
                </li>

                <li>
                  <span className="text-primary font-bold">*-*</span> This Single Page website 
                </li>
                <li>
                  <span className="text-primary font-bold">*-*</span> Users can  choose plane services 
                </li>
                <li>
                  <span className="text-primary font-bold">*-*</span>  Users can  do live chat author or manger.
                </li>
                <li>
                  <span className="text-primary font-bold ">*-*</span>  User can use contact form and conntected website manger 
                </li>

                <li>
                  {" "}
                  <span className="text-primary font-bold">*-* </span>{" "}
                  <span className="font-bold"> Technology Used:</span> : Wordpress CMS, Ocen Wp Theme, 
                  Eelementor pro, builder ,particles.js, crisp live chat, 
                </li>
              </ul>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WpProjectDetail;