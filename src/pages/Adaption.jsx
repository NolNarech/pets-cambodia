import { useEffect, useState } from "react";
import AOS from "aos";

export default function AdoptionSection() {
  // Images stored inside /public/image/
  const images = ["/image/img1.jpg", "/image/img2.jpg", "/image/img3.jpg"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Initialize AOS only once
    AOS.init();

    // Auto slideshow
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleBuyClick = () => {
    const modal = new window.bootstrap.Modal(
      document.getElementById("paymentModal")
    );
    modal.show();
    startCountdown();
  };

  const startCountdown = () => {
    let timeLeft = 5;
    const timer = setInterval(() => {
      console.log(`Closing in ${timeLeft} seconds`);
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timer);
        const modalEl = document.getElementById("paymentModal");
        const modal = window.bootstrap.Modal.getInstance(modalEl);
        modal.hide();
      }
    }, 1000);
  };

  return (
    <section id="Adoption" className="adoption py-5">
      <div className="container py-5">
        <div className="container text-white py-1">
          <h1 className="text-primary text-center fs-1 fw-bold section-title">
            Begin the Adoption Process
          </h1>
        </div>
        <div className="row align-items-center">
          {/* Image Slideshow */}
          <div className="col-lg-6 text-center">
            <img
              style={{ width: "500px", height: "400px", objectFit: "cover" }}
              src={images[index]}
              alt="Adopt a pet"
              className="img-fluid rounded-3 shadow mx-auto d-block"
            />
          </div>

          {/* Adoption Steps */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4 text-center mt-4">
              Start Your Adoption Journey
            </h2>

            <div className="step d-flex align-items-start mb-4">
              <div className="step-number">1</div>
              <div className="ms-3">
                <h5 className="fw-bold">Find the Perfect Pet</h5>
                <p className="text-muted">
                  Browse adoptable pets in shelters and rescues near you and
                  find the perfect match for your family.
                </p>
              </div>
            </div>

            <div className="step d-flex align-items-start mb-4">
              <div className="step-number">2</div>
              <div className="ms-3">
                <h5 className="fw-bold">Visit the Animal Shelter</h5>
                <p className="text-muted">
                  Reach out directly to shelters and rescues to arrange a
                  meeting with your chosen pet.
                </p>
              </div>
            </div>

            <div className="step d-flex align-items-start mb-4">
              <div className="step-number">3</div>
              <div className="ms-3">
                <h5 className="fw-bold">Get Ready to Bring Your New Pet Home</h5>
                <p className="text-muted">
                  Use our comprehensive adoption checklist to ensure you're
                  ready to welcome your new pet home.
                </p>
              </div>
            </div>

            <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <a
                href="#"
                className="btn btn-orange px-4 py-2 rounded-pill buyBtn"
                onClick={handleBuyClick}
              >
                Search Adoptable Pets
              </a>
              <a
                href="#"
                className="btn btn-light border px-4 py-2 rounded-pill"
              >
                See Our Adoption Checklist
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="paymentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="paymentModalLabel">
                Adoption Payment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Your adoption process will begin soon. 🐾
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
