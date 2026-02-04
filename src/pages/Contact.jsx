import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col mt-5 bg-primary rounded-3 text-white pt-3">
            <h3>🏢 Office Address</h3>
            <p className="pt-3">
              IT Artificer <br /> Main GT.Road Board Bazar / IT Park <br />{" "}
              Peshawar, Pakistan
            </p>
          </div>
          <div className="col mt-5 bg-info rounded-3 text-white pt-3 ms-3">
            <h3>📧 Email</h3>
            <p className="pt-3">shahabaaak@gmail.com</p>
          </div>
          <div className="col mt-5 bg-success rounded-3 text-white pt-3 ms-3">
            <h3>📱 Phone</h3>
            <p className="pt-3"> +92 3155123460</p>
          </div>
        </div>
      </div>

      <div className="container mt-3 border">
        <div className="row">
          <div className="col p-3">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Name</label>
            </div>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="address"
              />
              <label for="floatingPassword">Address</label>
            </div>

            <div className="form-floating">
              <input
                type="text"
                className="form-control mt-3"
                id="floatingPassword"
                placeholder="phone"
              />
              <label for="floatingPassword">Phone Number</label>
            </div>

            <textarea className="form-control mt-3" placeholder="Enter Message" rows='3'></textarea>
          <button className="btn btn-primary mt-2">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
