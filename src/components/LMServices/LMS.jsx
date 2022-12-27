import React from "react";
import "./lms.css";

function LMS() {
  return (
    <>
      <div className="lms">
        <div className="section-heading text-center py-5" id="lmservice">
          <h2>Legal Management Services</h2>
        </div>

        <section className="container d-flex justify-content-center mb-5 py-2">
          {/*------------------------------| Figure-1 |-------------------------------*/}
          <div className="container col-lg-12">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
              <figure className="figure">
                <div className="col">
                  <div className="fig-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/card-img-1.jpg"}
                      className="figure-img p-2 img-fluid mx-auto d-block"
                      style={{ height: "300px", width: "400px" }}
                      alt="..."
                    />
                  </div>

                  <h6 className="fig-heading mt-3 text-center">
                    <b>Services One</b>
                  </h6>

                  <figcaption className="Lms-caption mt-4 ps-lg-2 pe-lg-2 ps-md-5 pe-md-5">
                    <p>
                      Nulla vitae elit libero,a pharetra augue interdum. Nulla
                      vitaeelit libero, ak pharetra interdum.Nulla vitaeelit
                      libero, ap pharetra mollis interdum. Nulla vitae elit
                      mollis.
                    </p>
                  </figcaption>
                </div>
              </figure>

              {/*------------------------------| Figure-2 |-------------------------------*/}
              <figure className="figure">
                <div className="col">
                  <div className="fig-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/card-img-1.jpg"}
                      className="figure-img p-2 img-fluid mx-auto d-block"
                      style={{ height: "300px", width: "400px" }}
                      alt="..."
                    />
                  </div>

                  <h6 className="fig-heading mt-3 text-center">
                    <b>Services Two</b>
                  </h6>

                  <figcaption className="Lms-caption mt-4 ps-lg-2 pe-lg-2 ps-md-5 pe-md-5">
                    <p>
                      Nulla vitae elit libero,a pharetra augue interdum. Nulla
                      vitaeelit libero, ak pharetra interdum.Nulla vitaeelit
                      libero, ap pharetra mollis interdum. Nulla vitae elit
                      mollis.
                    </p>
                  </figcaption>
                </div>
              </figure>

              {/*------------------------------| Figure-3 |-------------------------------*/}
              <figure className="figure">
                <div className="col">
                  <div className="fig-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/card-img-1.jpg"}
                      className="figure-img p-2 img-fluid mx-auto d-block"
                      style={{ height: "300px", width: "400px" }}
                      alt="..."
                    />
                  </div>

                  <h6 className="fig-heading mt-3 text-center">
                    <b>Services Three</b>
                  </h6>

                  <figcaption className="Lms-caption mt-4 ps-lg-2 pe-lg-2 ps-md-5 pe-md-5">
                    <p>
                      Nulla vitae elit libero,a pharetra augue interdum. Nulla
                      vitaeelit libero, ak pharetra interdum.Nulla vitaeelit
                      libero, ap pharetra mollis interdum. Nulla vitae elit
                      mollis.
                    </p>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LMS;
