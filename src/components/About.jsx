import React from "react";
import about from "../assets/Frame00.png";
import Ico from "../assets/Ico.png";
import ico1 from "../assets/ico1.png";
import Ico2 from "../assets/Ico2.png";
import Vector from "../assets/Vector.png";

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={about} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDgrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/5 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium sequi veniam voluptas repellat, dolores laborum illo
              ipsa voluptate dolor, possimus ea at et, inventore placeat!
              Facilis molestias tempore in voluptas?
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Company Satats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDgrey font-semibold mb-4 md:w-2/3">
              Helping a local <br />
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={Ico} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDgrey font-semibold">
                    2, 245, 341
                  </h4>
                  <p>Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={Ico2} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDgrey font-semibold">
                    2, 245, 341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              {/* ******************************** */}
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={ico1} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDgrey font-semibold">
                    2, 245, 341
                  </h4>
                  <p>Event Booking</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={Vector} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDgrey font-semibold">
                    2, 245, 341
                  </h4>
                  <p>Payment</p>
                </div>
              </div>
              {/* ******************************** */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
