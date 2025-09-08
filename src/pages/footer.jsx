import React from "react";

function Contact() {
  return (
    <section
      className="contact-area py-5 bg-dark text-light"
      id="contact"
      data-aos="zoom-in-up"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="contact-content text-center">
              {/* Divider */}
              <hr className="mb-4 text-light" />

              {/* Small intro text */}
              <h6 className="mb-3">
                Created a new project on my own for the first time.
              </h6>

              {/* Phone Numbers */}
              <h6 className="mb-4">
                📞 +855 081 595 323 <span className="mx-2">|</span> +855 088 888 323
              </h6>

              {/* Social Links */}
              <div className="social-icons mb-4">
                <ul className="list-unstyled d-flex justify-content-center gap-3">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-x-twitter icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g icon"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <h5 className="text-center text-light mt-2">By Etec centre</h5>
              <p className="text-light text-center mb-0">
                &copy; 2025 All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
