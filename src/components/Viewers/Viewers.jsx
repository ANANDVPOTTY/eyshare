import "./viewers.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

import bgimgv from "../../img/bg-img.jpg";

function Viewers() {
  return (
    <>
      <section>
        <div className="bg-image">
          <img src={bgimgv} alt="..." />
        </div>
        <div className="heading">
          <h1 className="fw-bolder" style={{ fontSize: 35 }}>
            GLINT Executives
          </h1>
        </div>
        <hr className="un-line" />

        {/*==========================================================================*/}
        <div>
          <MDBContainer>
            <MDBRow className="text-center">
              <div className="tc-box">
                {/*-----------------------------------------1----------------------------------------*/}
                <MDBCol lg="1" className="img-1 mb-5 mb-md-0">
                  <div className="d-flex justify-content-center align-items-center img1">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="text-white mb-1 mt-2 ms-0 text-nowrap text-capitalize">
                    <small>Anheloh Asynhmki</small>
                  </h5>
                  <h6 className="text-warning mb-1">UX Designer</h6>
                </MDBCol>

                {/*-------------------------------------------2--------------------------------------*/}
                <MDBCol lg="2" className="img-2 mb-5 mb-md-0">
                  <div className="d-flex justify-content-center align-items-center img1">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="text-white mb-1 mt-3 ms-0 text-nowrap  text-capitalize">
                    <small>Anheloh Asynhmki</small>
                  </h5>
                  <h6 className="text-warning mb-1">Web Developer</h6>
                </MDBCol>

                {/*--------------------------------------------3-------------------------------------*/}
                <MDBCol lg="1" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center align-items-center img1">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="text-white mb-1 mt-3 ms-0 text-nowrap text-capitalize">
                    Maria
                  </h5>
                  <h6 className="text-warning mb-1">Photographer</h6>
                </MDBCol>

                {/*----------------------------------------------4-----------------------------------*/}
                <MDBCol lg="2" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center align-items-center img1">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="text-white mb-1 mt-3 ms-0 text-nowrap  text-capitalize">
                    John Doe
                  </h5>
                  <h6 className="text-warning mb-1">UX Designer</h6>
                </MDBCol>

                {/*------------------------------------------------5---------------------------------*/}
                <MDBCol lg="1" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center align-items-center img1">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="text-white mb-1 mt-3 ms-0 text-nowrap  text-capitalize">
                    Alex
                  </h5>
                  <h6 className="text-warning mb-1">Web Developer</h6>
                </MDBCol>

                {/*--------------------------------------------------6-------------------------------*/}
                <MDBCol lg="2" className="mb-5 mb-md-0 text-capitalize">
                  <div className="d-flex justify-content-center align-items-center img1">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="text-white mb-1 mt-3 ms-0 text-nowrap text-capitalize">
                    Maria Kate
                  </h5>
                  <h6 className="text-warning mb-1">Photographer</h6>
                </MDBCol>
              </div>
            </MDBRow>
          </MDBContainer>
        </div>
      </section>
    </>
  );
}

export default Viewers;
