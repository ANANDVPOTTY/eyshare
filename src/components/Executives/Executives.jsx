import React from "react";
import "./executives.css";

import exebgimg from "../../img/exe-bg-img.jpg";
// import underlineimg from "../../img/underline.jpg";

function Executives() {
  return (
    <>
      <div className="executives-section">
        {/*--------------| Heading |---------------*/}
        <div className="section-exe-heading container py-5 px-5">
          <h3 className="">GLINT Executives</h3>
          {/* <img src={underlineimg} alt="" /> */}
        </div>

        {/*--------------| Bg-Image |---------------*/}
        {/* <div className="exe-bg-img img-fluid">
          <img src={exebgimg} alt="bg-image" />
        </div> */}

        {/*--------------| Our Executives |---------------*/}
        <section className="our-executives">
          <div className="wrapper">
            <ul className="our-executives-details">
              {/*--------------| Executive-1 |---------------*/}
              <li className="executive-1">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  className="rounded-circle shadow-1-strong"
                  width="180"
                  height="180"
                />
                <div className="name-designation">
                  <h5>Anheloh Asynhmki</h5>
                  <h6>UX Designer</h6>
                </div>
              </li>

              {/*--------------| Executive-2 |---------------*/}
              <li className="executive executive-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                  className="rounded-circle shadow-1-strong"
                  width="110"
                  height="110"
                />
                <div className="name-designation">
                  <h5>Anheloh Asynhmki</h5>
                  <h6>UX Designer</h6>
                </div>
              </li>

              {/*--------------| Executive-3 |---------------*/}
              <li className="executive executive-3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  className="rounded-circle shadow-1-strong"
                  width="110"
                  height="110"
                />
                <div className="name-designation">
                  <h5>Anheloh Asynhmki</h5>
                  <h6>UX Designer</h6>
                </div>
              </li>

              {/*--------------| Executive-4 |---------------*/}
              <li className="executive executive-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                  className="rounded-circle shadow-1-strong"
                  width="110"
                  height="110"
                />
                <div className="name-designation">
                  <h5>Anheloh Asynhmki</h5>
                  <h6>UX Designer</h6>
                </div>
              </li>

              {/*--------------| Executive-5 |---------------*/}
              <li className="executive executive-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                  className="rounded-circle shadow-1-strong"
                  width="110"
                  height="110"
                />
                <div className="name-designation">
                  <h5>Anheloh Asynhmki</h5>
                  <h6>UX Designer</h6>
                </div>
              </li>

              {/*--------------| Executive-6 |---------------*/}
              <li className="executive executive-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                  className="rounded-circle shadow-1-strong"
                  width="110"
                  height="110"
                />
                <div className="name-designation">
                  <h5>Anheloh Asynhmki</h5>
                  <h6>UX Designer</h6>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Executives;
