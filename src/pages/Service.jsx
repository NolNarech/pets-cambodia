import { useEffect } from "react";
import AOS from "aos";
import houseIcon from "../icon/house.png";
import Operator from "../icon/operator.png";
import Placeholder from "../icon/placeholder.png";
import Veterinarian from "../icon/veterinarian.png";
import Shop from "../icon/shop.png";
import Teamwork from "../icon/teamwork.png";

export default function ServiceAndLocation() {
  useEffect(() => {
    AOS.init();
  }, []);

const services = [
  {
    img: Operator,
    title: "Contact Us",
    text: "Have questions? Get in touch with our team anytime.",
  },
  {
    img: Placeholder,
    title: "Find Us",
    text: "Phnom Penh Borey Piphop Thmey Kour, Srov 2 Home 102 Street 9",
  },
  {
    img: Veterinarian,
    title: "Pet Care",
    text: "Trusted, affordable, and caring services available daily (12h/7days).",
  },
  {
    img: Shop,
    title: "Shop",
    text: "Browse food, toys, and supplies to keep your pets happy and healthy.",
  },
  {
    img: Teamwork,
    title: "About Us",
    text: "Learn more about our mission and how we care for animals every day.",
  },
  {
    img: houseIcon,
    title: "Adopt a Pet",
    text: "Find your perfect companion and give a pet a loving home.",
  },
];


  return (
    <section id="Service" className="map mt-3 overflow-auto overflow-y-hidden">
      <div className="container text-white py-1 mt-4">
        <h1 className="text-primary text-center fs-1 fw-bold section-title mt-5">
          The center pet's Services counter
        </h1>
      </div>

      <div className="container mt-3">
        <div className="row d-flex text-center text-dark g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-xl-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div className="cards h-100">
                <div className="card-body p-4">
                  <img
                    className="mt-2"
                    src={service.img}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                    alt={service.alt}
                  />
                  <h5 className="mt-3">{service.title}</h5>
                  <p className="card-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        id="location"
        className="row align-items-center justify-content-center m-3"
        data-aos="fade-up"
        data-aos-duration="250"
      >
        <div className="col-12">
          <h1 className="text-primary text-center fs-1 fw-bold section-title mt-5">
            Find Us on the Map 🐹
          </h1>
        </div>
        <div className="col-xl-12 col-md-10 mt-4">
          <div className="ratio ratio-16x9 shadow rounded-3">
            <iframe className="rounded-2 "
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d250190.60816885572!2d104.9321469!3d11.5354775!3m2!1i1024!2i768!4f13.1!2m1!1shamster%20for%20sell!5e0!3m2!1sen!2skh!4v1755829765522!5m2!1sen!2skh"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
