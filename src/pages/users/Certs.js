import React, {useState, useEffect, useContext} from 'react';
import AuthContext from '../../store/auth-context';
import UserLayout from '../../layout/UserLayout';
import axios from "../../default_axios";


const Certs = () => {
    const authCtx = useContext(AuthContext)

    const getAllCerts = () => {
        axios.get('')
    }
  return (
    <div className="body">
        <UserLayout>
             <section role="main" class="content-body card-margin">
          <header className="page-header">
            <h2>Certificates</h2>
          </header>

          {/* <!-- start: page --> */}
          <div className="row">
            <div className="col">
              <section className="card">
                <header className="card-header">
                  <div className="card-actions">
                    <a
                      href="#"
                      className="card-action card-action-toggle"
                      data-card-toggle
                    ></a>
                    <a
                      href="#"
                      className="card-action card-action-dismiss"
                      data-card-dismiss
                    ></a>
                  </div>

                  <h2 className="card-title">Certificates</h2>
                </header>
                <div className="card-body">
                  <section className="card">
                    <header className="card-header">
                      <div className="card-actions">
                        <a
                          href="#"
                          className="card-action card-action-toggle"
                          data-card-toggle
                        ></a>
                        <a
                          href="#"
                          className="card-action card-action-dismiss"
                          data-card-dismiss
                        ></a>
                      </div>

                      <h2 className="card-title">Certificates Uploaded</h2>
                      <p className="card-subtitle">
                        Three simple popups with different scaling settings.
                      </p>
                    </header>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <h5
                            className="font-weight-semibold text-dark text-uppercase"
                          >
                            Certificate 1
                          </h5>
                          <a
                            href="img/projects/project.jpg"
                            data-plugin-lightbox
                            data-plugin-options='{ "type":"image" }'
                            title="Caption. Can be aligned it to any side and contain any HTML."
                          >
                            <img
                              className="img-fluid"
                              src="img/projects/project.jpg"
                              width="145"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <h5
                            className="font-weight-semibold text-dark text-uppercase"
                          >
                            Certificate 2
                          </h5>
                          <a
                            href="img/projects/project.jpg"
                            data-plugin-lightbox
                            data-plugin-options='{ "type":"image" }'
                            title="Caption. Can be aligned it to any side and contain any HTML."
                          >
                            <img
                              className="img-fluid"
                              src="img/projects/project.jpg"
                              width="145"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <h5
                            className="font-weight-semibold text-dark text-uppercase"
                          >
                            Certificate 3
                          </h5>
                          <a
                            href="img/projects/project.jpg"
                            data-plugin-lightbox
                            data-plugin-options='{ "type":"image" }'
                            title="Caption. Can be aligned it to any side and contain any HTML."
                          >
                            <img
                              className="img-fluid"
                              src="img/projects/project.jpg"
                              width="145"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>

                  <form className="form-horizontal form-bordered" method="get">
                    <div className="form-group row pb-4">
                      <div className="form-group row pb-4">
                        <label className="col-lg-3 control-label text-lg-end pt-2"
                          >Select Certicate type</label
                        >
                        <div className="col-lg-6">
                          <select className="form-control form-control-lg mb-3">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                        </div>
                      </div>
                      <label className="col-lg-3 control-label text-lg-end pt-2"
                        >Upload new Certificate</label
                      >
                      <div className="col-lg-6">
                        <div
                          className="fileupload fileupload-new"
                          data-provides="fileupload"
                        >
                          <div className="input-append">
                            <div className="uneditable-input">
                              <i className="fas fa-file fileupload-exists"></i>
                              <span className="fileupload-preview"></span>
                            </div>
                            <span className="btn btn-default btn-file">
                              <span className="fileupload-exists">Change</span>
                              <span className="fileupload-new">Select file</span>
                              <input type="file" />
                            </span>
                            <a
                              href="#"
                              className="btn btn-default fileupload-exists"
                              data-dismiss="fileupload"
                              >Remove</a
                            >
                          </div>
                        </div>

                        <div className="m-0">
                          <div className="col-lg-6">
                            <button
                              type="button"
                              className="mb-1 mt-1 me-1 btn btn-primary"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
          {/* <!-- end: page --> */}
        </section>
        </UserLayout>
    </div>
  )
}

export default Certs