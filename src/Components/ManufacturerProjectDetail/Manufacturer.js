import React from "react";
import banner from "../../Assets/images/leather_factory.jpg";
import Image from "../../Assets/images/leather_factory.jpg";
import login from "../../Assets/images/ProjectDetail/smartmockups_l48ecg3a.jpg";
import signUp from "../../Assets/images/ProjectDetail/smartmockups_l48edtxf.jpg";
import dashboard from "../../Assets/images/ProjectDetail/dasboard.jpg";
import homeLight from "../../Assets/images/ProjectDetail/home-light.jpg";
import homeDark from "../../Assets/images/ProjectDetail/home-dark.jpg";

const Manufacturer = () => {
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
              Laather Manufacturer Project
            </h1>
            <p class="mb-5 text-white">
              This is a full stack web development project that uses MongoDB as
              the back-end database,
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
            <img className="w-96" src={login} alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary ">Login Page </p>
            </div>
          </div>
        </div>
        {/* 3rd */}

        <div class="card lg:card bg-base-100 shadow-xl">
          <figure>
            <img className="w-96" src={signUp} alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary ">Sign Up Page </p>
            </div>
          </div>
        </div>
        {/* 4th */}
        <div class="card lg:card bg-base-100 shadow-xl">
          <figure>
            <img className="w-96" src={dashboard} alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary "> User Dashboard </p>
            </div>
          </div>
        </div>
        {/* 5th */}
        <div class="card lg:card bg-base-100 shadow-xl">
          <figure>
            <img className="w-96" src={homeLight} alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary ">Home Page Light Mood </p>
            </div>
          </div>
        </div>
        {/* 6th */}
        <div class="card lg:card bg-base-100 shadow-xl">
          <figure>
            <img className="w-96" src={homeDark} alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary ">Home Page Dark Mood</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:w-1/2 mx-12 lg:mx-auto my-10">
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
                  <span className="font-bold"> Project Name:</span> Leather
                  Factory Manufacturer{" "}
                </li>
                <li>
                  {" "}
                  <span className="text-primary font-bold">*-* </span>{" "}
                  <span className="font-bold"> Project Features: </span>
                </li>

                <li>
                  <span className="text-primary font-bold">*-*</span> This is a
                  full stack web development project that utilizes MongoDB as
                  the back end database.
                </li>
                <li>
                  <span className="text-primary font-bold">*-*</span>
                  Users can create accounts using their email address and
                  password.
                </li>
                <li>
                  <span className="text-primary font-bold ">*-*</span>
                  Firebase and Google Accounts will be used for authentication
                  as well as to order products.
                </li>
                <li>
                  <span className="text-primary font-bold ">*-*</span> API links
                  will be protected with JWT and customers can order products.
                  Admin can manage all orders, upload products, and cancel
                  orders
                </li>
                <li>
                  {" "}
                  <span className="text-primary font-bold">*-* </span>{" "}
                  <span className="font-bold"> Technology Used:</span> React,
                  HTMl ,CSS, Tailwind,Daisyui,JavaScript, React hook
                  form,React-Toastify,Firebase,React-Query, React-firebase hook,
                  Node.js, MongoDB,Jwt.
                </li>
              </ul>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturer;
