import React from "react";
import "./lfcs.css";

function LFCS() {
  return (
    <>
      <div className="lfcs">
        <div
          className="container section-heading text-center py-5"
          id="lfcservice"
        >
          <h2>Legal Function Consulting</h2>
        </div>
        <section className="about lfcs-section">
          <div className="container">
            <div className="row">
              {/*------------Image-------------- */}
              <div className="col-lg-5 ms-4 ms-sm-2 ms-md-4 col-md-12 col-sm-12 img-fluid">
                <div className="lfcs-img">
                  <img
                    src={process.env.PUBLIC_URL + "/images/crd-img.png"}
                    alt="LFCS-image"
                    className="img-fluid"
                  />
                </div>
              </div>

              {/*---------- Paragraph----------------*/}
              <div className="container col-lg-6 col-md-12 col-sm-12 ps-lg-2 ps-md-5 ps-sm-5 pe-md-5 pe-sm-4 mt-md-4 mt-sm-5">
                <div className="Lfcs-caption">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse accusamus eaque harum eveniet rem? Nemo, animi, aperiam
                    in natus quia odit voluptatum quaerat eaque ratione illo
                    quos, sint dignissimos iste similique consequatur voluptatem
                    rem quasi. Corrupti debitis est maiores velit? Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Esse accusamus
                    eaque harum eveniet rem? Nemo, animi, aperiam in natus quia
                    odit voluptatum quaerat eaque ratione illo quos, sint
                    dignissimos iste similique consequatur voluptatem rem quasi.
                    Corrupti debitis est maiores velit?voluptatum quaerat eaque
                    ratione illo quos, sint dignissimos iste similique
                    consequatur voluptatem rem quasi. Corrupti debitis est
                    maiores velit?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LFCS;
