import React from "react";
import phone from '../../Assets/images/png/005-call.png'
import email from '../../Assets/images/png/004-email.png'
import whatsUp from '../../Assets/images/png/008-whatsapp.png'

const ContactMe = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex flex-col   md:flex-row ">

        <div class="text-center lg:text-left w-1/2 lg:w-1/2">
          <h1 class=" text-xl lg:text-4xl font-bold capitalize ">Contact me for more information!</h1>
          
          <p class="py-6">
          I’m excited to learn about your project. Ready to get started?.
          </p>
          <div className="">
              <div className="flex gap-1 py-2">
                  <img className="w-7" src={email} alt='social'/> <a className="  lg:text-2xl font-bold" href="mailto:imranhossain.webdev@gmail.com">imranhossain.webdev@gmail.com </a>
              </div>
              <div className="flex gap-1">
                  <img className="w-7" src={phone} alt='social'/> <a className=" lg:text-2xl font-bold" href="tel:01688615454">(+88) 01688615454 </a>
              </div>
              <div className="flex gap-1 py-2">
                  <img className="w-7" src={whatsUp} alt='social'/> <a className=" lg:text-2xl font-bold" href="#">(+88) 01688615454 </a>
              </div>
          </div>
        </div>


        <div class="card flex-shrink-2 w-1/2 max-w-sm shadow-2xl  bg-base-100">
          <div class="card-body">
              <div>
              <h1 className="text-4xl font-bold ">Contact Me </h1>
              <progress class="progress progress-primary bg-white w-16 h-1 "></progress>
              </div>
            <form action="https://formsubmit.co/imranhossain.webdev@gmail.com" method="POST" >
              <div class="form-control gap-4">
                
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  class="input input-bordered"
                />
                
              </div>
              <div class="form-control">
                
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  class="input input-bordered my-2"
                />
                </div>

              <div class="form-control">
                
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  class="input input-bordered"
                />

              </div>
              <div class="form-control">
                
                <textarea 
                  type="text"
                  required
                  name="Message"
                  placeholder="Your messages"
                  class="textarea textarea-bordered my-2"
                />

              </div>
              <div class="form-control mt-6">
                <button  class="btn btn-primary" type="submit"  >Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
