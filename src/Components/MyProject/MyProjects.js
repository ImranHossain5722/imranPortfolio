import React from "react";
import firstProjectImage from "../../Assets/images/leather_factory.jpg";
import carSaleImage from "../../Assets/images/carSale.jpg";
import thirdProjectImage from "../../Assets/images/fitsness.jpg";
import wpProjectImage from "../../Assets/images/agancy.jpg";

const MyProjects = () => {
  return (
    <div class="min-h-screen bg-base-100 -mt-40">
      <div className="pt-48">
        <h1 className="pt-12 text-center text-4xl font-bold uppercase ">
          My Projects
        </h1>
        <p className="p-2 text-base font-semibold ">
          Here are a few design projects I've worked on recently. Want to see
          more?{" "}
          <a className="text-blue-500" href="mailto:imranhossain.web@gmail.com">
            Email me
          </a>{" "}
        </p>
        <progress class="progress progress-primary w-16 h-1 "></progress>
      </div>
      {/* First Image */}
      <div class="grid lg:grid-cols-2  gap-4 mx-16 justify-items-center pt-11">
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-60" src={firstProjectImage} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Leather Manufacturer</h2>
            <p className="text-left text-sm">
              This is a full stack web development project that uses MongoDB as
              the back-end database, and we can also protect all API links using
              JWT.
            </p>
            <div class="card-actions justify-end">
              <a
                className="btn btn-sm btn-primary text-xs"
                href=" https://assignment-12-8e5fb.web.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Site
              </a>

              <a
                className="btn btn-sm btn-primary text-xs"
                href="https://github.com/ImranHossain5722/manufacturer-website-client-side"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub Link
              </a>

              <a
                className="btn btn-sm btn-primary text-xs"
                href="/ManufacturerDetail"
                rel="noopener noreferrer"
                target="_blank"
              >
                Project Detail
              </a>
            </div>
          </div>
        </div>
        {/* Secund  */}
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-72" src={carSaleImage} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title"> CarSale warehouse </h2>
            <p className="text-left text-sm">
              This is a full stack web development project that utilizes MongoDB
              as the back end database. Users can create accounts using their
              email address and password.
            </p>

            <div class="card-actions justify-end">
              <a
                className="btn btn-sm btn-primary text-xs"
                href="https://carsale-a3464.web.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Site
              </a>

              <a
                className="btn btn-sm btn-primary text-xs"
                href="https://github.com/ImranHossain5722/warehouse-management-client-side"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub Link
              </a>

              <a
                className="btn btn-sm btn-primary text-xs"
                href="/WareHouseDetails"
                rel="noopener noreferrer"
                target="_blank"
              >
                Project Detail
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-72" src={thirdProjectImage} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Single fitness Trainer</h2>
            <p  className="text-left text-sm" >The project is an independent selling service.Users can create
              accounts using their email address and password. We will use
              Firebase-Authentication as well as Google Accounts and Github
              Accounts to authenticate users.</p>
            <div class="card-actions justify-end">
              <a
                className="btn btn-sm btn-primary text-xs"
                href=" https://single-fitness-trainer.web.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Site
              </a>

              <a
                className="btn btn-sm btn-primary text-xs"
                href="https://github.com/ImranHossain5722/independentService"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub Link
              </a>

              <a
                className="btn btn-sm btn-primary text-xs"
                href="/singleFitnessDetails"
                rel="noopener noreferrer"
                target="_blank"
              >
                Project Detail
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-72" src={wpProjectImage} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Web Agency </h2>
            <p className="text-left text-sm" >
              The project is an web agency sell are a digital marketing and software development company that provides cutting edge IT solutions. this project  build wordpressCMS
              
            </p>
            <div class="card-actions justify-end">
              <a
                className="btn btn-sm btn-primary text-xs"
                href=" http://techntag.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Site
              </a>

              {/* <a
                className="btn btn-sm btn-primary text-xs"
                href="https://github.com/ImranHossain5722/independentService"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub Link
              </a> */}

              <a
                className="btn btn-sm btn-primary text-xs"
                href="/wpProjectDetail"
                rel="noopener noreferrer"
                target="_blank"
              >
                Project Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
