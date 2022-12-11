import "../Services/services.css";
import React from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

function LFCS() {
  return (
    <>
      {/*===============| Legal Function Consulting |==================*/}
      <div className="mt-5 mb-5">
        <div className="d-flex justify-content-md-center mt-3">
          <h1 className="fw-bolder" style={{ fontSize: 35 }}>
            Legal Function Consulting
          </h1>
        </div>

        {/* -----------------------------1------------------------------ */}

        <div className="d-flex justify-content-md-center mt-3">
          <MDBCard style={{ width: "18rem" }} className="me-5 card-ey">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
              width={358}
              height={255}
              className="square bg-primary rounded"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle className="fw-bolder">Services One</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          {/* -------------------------------------2-------------------------------------- */}

          <MDBCard style={{ width: "18rem" }} className="ms-5.5 card-ey">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
              width={358}
              height={255}
              className="square bg-primary rounded"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle className="fw-bolder">Services Two</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          {/* --------------------------------------3---------------------------------- */}

          <MDBCard style={{ width: "18rem" }} className="ms-5 card-ey">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
              width={358}
              height={255}
              className="square bg-primary rounded"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle className="fw-bolder">Services Three</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </>
  );
}

export default LFCS;
