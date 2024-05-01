import React from "react";
import Navbar from "./Navbar";

const Download = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 text-center mb-0">Downloads</h1>
            <h3 className="fs-5 text-center mb-4">
              You are requested to deploy the <b>updates on a high priority </b>
              basis.
            </h3>
            <hr className="w-25 mx-auto" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div class="card p-3">
              <div class="card-body text-center mt">
                <i
                  className="fa fa-file-text fa-4x md-4 text-primary"
                  aria-hidden="true"
                ></i>
                <h5 class="card-title mc-3 fs-4 fw-bold">Sample Draft</h5>
                <p class="card-text lead">
                  Sample of the draft which gives you a clear idea about how the
                  agreement looks like.
                </p>
                <a
                  href="/download/LL-Draft.pdf"
                  class="btn btn-primary mb"
                  download={"/download/LL-Draft.pdf"}
                >
                  Download Draft
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card p-3">
              <div class="card-body text-center">
                <i
                  className="fa fa-download fa-4x md-4 text-primary"
                  aria-hidden="true"
                ></i>
                <h5 class="card-title mc-3 fs-4 fw-bold">RD-Service</h5>
                <p class="card-text lead">
                  For Windows , please download the update from.
                </p>
                <a
                  href="https://secugenindia.com/admin/upload/SGIRD_WIN32_UPD1.zip"
                  class="btn btn-primary"
                >
                  RD Service
                </a>
                <p className="mt-4">
                  <b className="t-color">Note:</b> Please do not uninstall
                  previous RD Service.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card p-3">
              <div class="card-body text-center">
                <i
                  className="fa fa-download fa-4x md-4 text-primary"
                  aria-hidden="true"
                ></i>
                <h5 class="card-title mc-3 fs-4 fw-bold">WEB API</h5>
                <p class="card-text lead">
                  For SGIBIOSRV Error Please download & install Latest WEB API
                  using below button.
                </p>
                <a
                  href="https://secugenindia.com/uploads/SGI_BWAPI_HTTPS.zip"
                  class="btn btn-primary"
                >
                  WEB API
                </a>
                <p className="mt-4 pd">
                  <b className="t-color">Note:</b> First Uninstall Previous WEB
                  API Service.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div class="card p-3">
              <div class="card-body text-center">
                <i
                  className="fa fa-cogs fa-4x md-4 text-primary"
                  aria-hidden="true"
                ></i>
                <h5 class="card-title mc-3 fs-4 fw-bold">Biometric Drivers</h5>
                <a href="SecuGen.zip" class="btn btn-primary">
                  Secugen
                </a>
                <br />
                <br />
                <a href="DigitalSign.zip" class="btn btn-primary mb">
                  Digital Signature
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div class="card p-3">
              <div class="card-body text-center">
                <i
                  className="fa fa-info fa-4x md-4 text-primary"
                  aria-hidden="true"
                ></i>
                <h5 class="card-title mc-3 fs-4 fw-bold">
                  User Manual & Settings
                </h5>
                <a href="eRegistration_UserManual.pdf" class="btn btn-primary">
                  E-Registration_UserManual
                </a>
                <br />
                <br />
                <a
                  href="InternetExplorerSettings.pdf"
                  class="btn btn-primary mb"
                >
                  Biometric Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
