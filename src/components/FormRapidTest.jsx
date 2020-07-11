import React, { useState } from "react";

const FormRapidTest = () => {
  // Handle state menggunakan useState react hooks. Disini saya menggunakan form controlled
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-4">
      <div className="d-flex flex-column align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="form-label">Gender</label>
            <div className="d-flex">
              <div className="form-check mr-4">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className="btn btn-dark"
            type="submit"
            data-toggle="modal"
            data-target="#dataForm"
          >
            Register
          </button>

          {/* Keluar modal setelah klik button Register dan akan menampilkan value dari field yang kita isi */}
          <div className="modal fade" id="dataForm" aria-hidden="true">
            <div className="modal-dialog modal-md">
              <div className="modal-content custom--bg">
                <div className="modal-header">
                  <h5 className="modal-title" style={{ color: "#ffffff" }}>
                    Data Form Rapid Test
                  </h5>
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
                <div className="modal-body" style={{ color: "#ffffff" }}>
                  <div className="d-flex">
                    <div style={{ width: "20%" }}>Name</div>
                    <div>: {name}</div>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "20%" }}>Gender</div>
                    <div>: {gender}</div>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "20%" }}>Age</div>
                    <div>: {age}</div>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "20%" }}>Address</div>
                    <div>: {address}</div>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "20%" }}>Email</div>
                    <div>: {email}</div>
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
        </form>
      </div>
    </div>
  );
};

export default FormRapidTest;
