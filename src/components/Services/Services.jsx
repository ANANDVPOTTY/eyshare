import React from "react";
import "./services.css";

function Services() {
  return (
    <>
      <div className="section-heading text-center mb-2 mt-3 py-3" id="services">
        <h2>Services</h2>
      </div>

      <section className="container d-flex justify-content-center mb-5 py-2">
        {/*------------------------------| Figure-1 |-------------------------------*/}
        <div className="container col-lg-10">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
            <figure className="figure">
              <div className="col">
                <a href="#lmservice">
                  <div className="fig-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/card-img-1.jpg"}
                      className="figure-img p-2 img-fluid mx-auto d-block"
                      style={{ height: "300px", width: "400px" }}
                      alt="..."
                    />
                  </div>

                  <h6 className="fig-heading mt-3 text-center">
                    <b>Legal Management Services</b>
                  </h6>
                </a>
                <figcaption className="Services-caption mt-4">
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
                <a href="#lfcservice">
                  <div className="fig-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/card-img-1.jpg"}
                      className="figure-img p-2 img-fluid mx-auto d-block"
                      style={{ height: "300px", width: "400px" }}
                      alt="..."
                    />
                  </div>

                  <h6 className="fig-heading mt-3 text-center">
                    <b>Legal Function Consulting</b>
                  </h6>
                </a>
                <figcaption className="Services-caption mt-4">
                  Nulla vitae elit libero,a pharetra augue interdum. Nulla
                  vitaeelit libero, ak pharetra interdum.Nulla vitaeelit libero,
                  ap pharetra mollis interdum. Nulla vitae elit mollis.
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
