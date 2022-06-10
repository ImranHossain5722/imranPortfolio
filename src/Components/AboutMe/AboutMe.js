import React from "react";
import code from "../../Assets/images/Coding-bro.svg";
import skill from "../../Assets/images/Website designer-amico.svg";

const AboutMe = () => {
  return (
    <div className="h-auto" style={{ backgroundColor: "#057AFF",marginTop:'-89px' }}>
      <h1 class="text-3xl font-bold text-white pt-12">
              About Me
            </h1>
            <progress class="progress progress-primary bg-white w-16 h-1 "></progress>
      <div class="hero ">
        <div class="hero-content text-center">
          <div class="max-w-3xl py-24">
  
            <h1 class="text-3xl font-bold text-white ">
              Hi, I’m Imran. Nice to meet you
            </h1>
            <p class="py-6 text-white text-center">
              Since beginning my journey as a freelance web Ui designer and
              developer nearly 2 years ago. Currently, I work as a React
              Developer. I enjoy using my creativity. In the past year, I have
              gained knowledge in various parts of web development. which is why
              I love working with React.js. I want to become an awesome
              full-stack web developer who can make beautiful UIs and also
              handle the back end smoothly.
            </p>
          </div>
        </div>
      </div>
      <div class="grid justify-items-start lg:grid-cols-2 sm:grid-cols-1 mx-auto bg-base-200 w-10/12 drop-shadow-2xl rounded-lg">
        <div className=" order-2 lg:order-1 flex items-center">
          <figure className="w-96 p-5">
            <img className="drop-shadow-xl" src={skill} alt="code" />
          </figure>
        </div>

        <div className="p-5 order-1 lg:order-2">
          <h1 class="text-5xl font-bold uppercase ">My Skills </h1>
          <p class="p-2">I am always determined to learn new technology.</p>
          <progress class="progress progress-primary w-16 h-1 "></progress>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
            <div className="html">
              <p className="text-xl font-bold capitalize text-left px-5">HTML</p>
              <br />
              <progress
                class="progress progress-primary w-56 mr-24"
                value="98"
                max="100"
              ></progress>
            </div>
            <div className="css">
              <p className="text-xl font-bold capitalize text-left px-5">CSS</p>
              <br />
              <progress
                class="progress progress-primary w-56 mr-24"
                value="98"
                max="100"
              ></progress>
            </div>
            <div className="bootstrap">
              <p className="text-xl font-bold capitalize text-left px-5">Bootstrap</p>
              <br />
              <progress
                class="progress progress-primary w-56 mr-24"
                value="98"
                max="100"
              ></progress>
            </div>
            <div className="tailwindCss">
              <p className="text-xl font-bold capitalize text-left px-5">Tailwind CSS</p>
              <br />
              <progress
                class="progress progress-primary w-56 mr-24"
                value="98"
                max="100"
              ></progress>
            </div>
            <div className="react">
              <p className="text-xl font-bold capitalize text-left px-5">REACT.JS</p>
              <br />
              <progress
                class="progress progress-primary w-56 mr-24"
                value="98"
                max="100"
              ></progress>
            </div>
            <div className="javaScript">
              <p className="text-xl font-bold capitalize text-left px-5">JavaScript</p>
              <br />
              <progress
                class="progress progress-primary w-56 mr-24"
                value="85"
                max="100"
              ></progress>
            </div>
            <div className="css">
              <p className="text-xl font-bold capitalize text-left px-5">Node.JS</p>
              <br />
              <progress
                class="progress progress-primary w-56 mr-24"
                value="55"
                max="100"
              ></progress>
            </div>
            <div className="css">
              <p className="text-xl font-bold capitalize text-left px-5">MongoDB</p>
              <br />
              <progress
                class="progress progress-primary w-56 mr-24"
                value="58"
                max="100"
              ></progress>
            </div>
            <div className="css">
              <p className="text-xl font-bold capitalize text-left px-5">Ui Design</p>
              <br />
              <progress
                class="progress progress-primary w-56 mr-24"
                value="70"
                max="100"
              ></progress>
            </div>
            <div className="css">
              <p className="text-xl font-bold uppercase text-left px-5">Wordpress</p>
              <br />
              <progress
                class="progress progress-primary w-56 mr-24"
                value="80"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
