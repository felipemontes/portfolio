import React from "react";
import "./css/Footer.css";

export default function Footer() {
  return (
    <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
      <footer>
        <div className="row my-5 justify-content-center py-5">
          <div className="col-10 no-padding">
            <div className="row footer-row">
              <div className="col-xl-3 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <h3 className="text-muted mb-md-0 mb-5 bold-text">
                  FelipeCodes
                </h3>
              </div>
              <div className="col-xl-4 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <h3 className=" mb-md-0 mb-5">felipe@codes.com</h3>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <p className="social text-muted mb-0 pb-0 bold-text social-icons">
                  {" "}
                  <span className="mx-2">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </span>{" "}
                  <span className="mx-2">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </span>{" "}
                  <span className="mx-2">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </span>{" "}
                  <span className="mx-2">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </span>{" "}
                </p>
              </div>
              {/* <small className="rights">
                <span>&#174;</span> Copyright © 2021 FelipeCodes LLC. All rights
                reserved.
              </small> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
