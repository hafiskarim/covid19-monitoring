import React from "react";

function IndonesiaCases({ propsIndonesiaCases }) {
  return (
    <>
      <div
        className="card custom--bg"
        data-toggle="modal"
        data-target="#indonesia-cases"
        style={{ cursor: "pointer" }}
      >
        <div className="card-body">
          <div className="card-country">Indonesia</div>
          {/* Keluar modal setelah klik card Indonesia */}
          <div className="modal fade" id="indonesia-cases" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content custom--bg">
                <div className="modal-header">
                  <h5 className="modal-title">Indonesia Cases</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    style={{ color: "#ffffff" }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
                      <div className="card custom--bg">
                        <div className="card-body">
                          <div className="case confirmed">
                            {/* Menampilkan Data Total Confirmed Indonesia dari API */}
                            {propsIndonesiaCases
                              ? propsIndonesiaCases[77].TotalConfirmed
                              : null}
                          </div>
                          <div className="status">Confirmed</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
                      <div className="card custom--bg">
                        <div className="card-body">
                          <div className="case recovered">
                            {/* Menampilkan Data Total Recovered Indonesia dari API */}
                            {propsIndonesiaCases
                              ? propsIndonesiaCases[77].TotalRecovered
                              : null}
                          </div>
                          <div className="status">Recovered</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
                      <div className="card custom--bg">
                        <div className="card-body">
                          <div className="case deaths">
                            {/* Menampilkan Data Total Deaths Indonesia dari API */}
                            {propsIndonesiaCases
                              ? propsIndonesiaCases[77].TotalDeaths
                              : null}
                          </div>
                          <div className="status">Deaths</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndonesiaCases;
