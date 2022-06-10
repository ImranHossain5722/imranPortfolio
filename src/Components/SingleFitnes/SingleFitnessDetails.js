import React from "react";
import banner from "../../Assets/images/fitsness.jpg";
import Image from "../../Assets/images/fitsness.jpg";
import login from "../../Assets/images/ProjectDetail/fitnLogin.jpg";
import signUp from "../../Assets/images/ProjectDetail/register.jpg";
import homeLight from "../../Assets/images/ProjectDetail/fitnessHome.jpg";
import manageItem from "../../Assets/images/ProjectDetail/mobile.jpg";
import tab from "../../Assets/images/ProjectDetail/tab.jpg";

const SingleFitnessDetails = () => {
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
              Single Fitness Trainer.
            </h1>
            <p class="mb-5 text-white">
              This is a  self independent selling service website
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
            <img className="w-96" src={tab} alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary ">Tab view</p>
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
              <p className="text-primary ">Home Page</p>
            </div>
          </div>
        </div>
        {/* 6th */}
        <div class="card lg:card bg-base-100 shadow-xl">
          <figure>
            <img className="w-96" src={manageItem} alt="Album" />
          </figure>
          <div class="card-body">
            <div class="">
              <p className="text-primary ">Mobile View </p>
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
                  <span className="font-bold"> Project Name:</span> Single
                  Fitness Trainer.
                </li>
                <li>
                  {" "}
                  <span className="text-primary font-bold">*-* </span>{" "}
                  <span className="font-bold"> Project Features: </span>
                </li>

                <li>
                  <span className="text-primary font-bold">*-*</span> The
                  project is an independent selling service.
                </li>
                <li>
                  <span className="text-primary font-bold">*-*</span>
                  Users can create accounts using their email address and
                  password.
                </li>
                <li>
                  <span className="text-primary font-bold ">*-*</span>
                  We will use Firebase-Authentication as well as Google Accounts
                  and Github Accounts to authenticate users.
                </li>
                <li>
                  <span className="text-primary font-bold ">*-*</span> We will
                  be using Firebase - Authentication for users to login as well
                  as using Google Accounts and Github account.
                </li>

                <li>
                  {" "}
                  <span className="text-primary font-bold">*-* </span>{" "}
                  <span className="font-bold"> Technology Used:</span> : React,
                  React,HTML,CSS,Bootstrap,JavaScript,React-Toastify,Fir
                  ebase,React-Query, React-firebase hook.
                </li>
              </ul>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFitnessDetails;
