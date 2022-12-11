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
          <h1
            className="fw-bolder u-line"
            style={{
              fontSize: 35,
              marginLeft: 550,
              marginTop: 5,
              padding: 40,
            }}
          >
            GLINT Executives
          </h1>
          <hr className="" />
        </div>

        {/*==========================================================================*/}

        <MDBContainer className="align-items-center justify-content-center">
          <MDBRow className="text-center mt-4">
            <div className="tc-box">
              {/*-----------------------------------------| Item-1 |----------------------------------------*/}
              <MDBCol lg="1" className="mb-md-0">
                <div className="d-flex justify-content-center align-items-center img1">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    className="rounded-circle shadow-1-strong"
                    width="160"
                    height="160"
                  />
                </div>
                <div className="info1">
                  <h5
                    className="d-flex justify-content-center align-items-center ml-5 mb-1 mt-2 ms-0 text-nowrap names"
                    style={{ fontSize: 17 }}
                  >
                    Anheloh Asynhmki
                  </h5>
                  <h6
                    className="d-flex justify-content-center align-items-center text-white ml-5 mb-1 mt-1 ms-0 text-nowrap"
                    style={{ fontSize: 12 }}
                  >
                    UX Designer
                  </h6>
                </div>
              </MDBCol>

              {/*-------------------------------------------| Item-2 |--------------------------------------*/}
              <MDBCol lg="1" className="mb-md-0">
                <div className="d-flex justify-content-center align-items-center img2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                    className="rounded-circle shadow-1-strong"
                    width="120"
                    height="120"
                  />
                </div>

                <div className="info2">
                  <h5
                    className="d-flex justify-content-center align-items-center ml-5 mb-1 mt-2 ms-0 text-nowrap names"
                    style={{ fontSize: 17 }}
                  >
                    Anheloh Asynhmki
                  </h5>
                  <h6
                    className="d-flex justify-content-center align-items-center text-white ml-5 mb-1 mt-2 ms-0 text-nowrap "
                    style={{ fontSize: 12 }}
                  >
                    Web Developer
                  </h6>
                </div>
              </MDBCol>

              {/*--------------------------------------------| Item-3 |-------------------------------------*/}
              <MDBCol lg="1" className="mb-md-0">
                <div className="d-flex justify-content-center align-items-center img3">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    className="rounded-circle shadow-1-strong"
                    width="120"
                    height="120"
                  />
                </div>
                <div className="info3">
                  <h5
                    className="d-flex justify-content-center align-items-center ml-5 mb-1 mt-2 ms-0 text-nowrap names"
                    style={{ fontSize: 17 }}
                  >
                    Anheloh Asynhmki
                  </h5>
                  <h6
                    className="d-flex justify-content-center align-items-center text-white ml-5 mb-1 mt-2 ms-0 text-nowrap"
                    style={{ fontSize: 12 }}
                  >
                    Photographer
                  </h6>
                </div>
              </MDBCol>

              {/*----------------------------------------------| Item-4 |-----------------------------------*/}
              <MDBCol lg="1" className="mb-md-0">
                <div className="d-flex justify-content-center align-items-center img4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                    className="rounded-circle shadow-1-strong"
                    width="120"
                    height="120"
                  />
                </div>
                <div className="info4">
                  <h5
                    className=" d-flex justify-content-center align-items-center ml-5 mb-1 mt-2 ms-0 text-nowrap names"
                    style={{ fontSize: 17 }}
                  >
                    Anheloh Asynhmki
                  </h5>
                  <h6
                    className=" d-flex justify-content-center align-items-center text-white ml-5 mb-1 mt-2 ms-0 text-nowrap"
                    style={{ fontSize: 12 }}
                  >
                    Web Developer
                  </h6>
                </div>
              </MDBCol>

              {/*------------------------------------------------| Item-5 |---------------------------------*/}
              <MDBCol lg="1" className="mb-md-0">
                <div className="d-flex justify-content-center align-items-center img5">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                    className="rounded-circle shadow-1-strong"
                    width="120"
                    height="120"
                  />
                </div>

                <div className="info5">
                  <h5
                    className=" d-flex justify-content-center align-items-center ml-5 mb-1 mt-2 ms-0 text-nowrap names"
                    style={{ fontSize: 17 }}
                  >
                    Anheloh Asynhmki
                  </h5>
                  <h6
                    className="d-flex justify-content-center align-items-center text-white ml-5 mb-1 mt-2 ms-0 text-nowrap"
                    style={{ fontSize: 12 }}
                  >
                    Web Developer
                  </h6>
                </div>
              </MDBCol>

              {/*--------------------------------------------------| Item-6 |-------------------------------*/}
              <MDBCol lg="1" className="mb-md-0 text-capitalize">
                <div className="d-flex justify-content-center align-items-center img6">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                    className="rounded-circle shadow-1-strong"
                    width="120"
                    height="120"
                    style={{ fontSize: 17 }}
                  />
                </div>
                <div className="info6">
                  <h5
                    className=" d-flex justify-content-center align-items-center ml-5 mb-1 mt-2 ms-0 text-nowrap names"
                    style={{ fontSize: 17 }}
                  >
                    Anheloh Asynhmki
                  </h5>
                  <h6
                    className="d-flex justify-content-center align-items-center text-white ml-5 mb-1 mt-2 ms-0 text-nowrap"
                    style={{ fontSize: 12 }}
                  >
                    Web Developer
                  </h6>
                </div>
              </MDBCol>
            </div>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default Viewers;
