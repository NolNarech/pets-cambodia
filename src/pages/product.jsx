import React from "react";
import Pawicon from '../icon/veterinarian.png'

function ProductCard() {
const pets = [
  { id: 1, title: "ChonkDoggo", desc: "Available", price: "$399.99", img: "/image/dog.jpg" },
  { id: 2, title: "MyChemicalDogmance", desc: "Available", price: "$299.99", img: "/image/dogfive.png" },
  { id: 3, title: "Sir Bark-a-lot", desc: "Available", price: "$288.99", img: "/image/dogg.png" },
  { id: 4, title: "Chilluminati", desc: "Available", price: "$234.99", img: "/image/dogla.png" },
  
  { id: 5, title: "Builder Bunbun", desc: "Available", price: "$14.99", img: "/image/ham1.png" },
  { id: 6, title: "Chipster", desc: "Available", price: "$16.99", img: "/image/ham2.png" },
  { id: 7, title: "Sir Nibbles", desc: "Available", price: "$14.99", img: "/image/ham3.png" },
  { id: 8, title: "Sweet Tooth", desc: "Available", price: "$18.99", img: "/image/ham4.png" },
  
  { id: 9, title: "Chubby Cheeks", desc: "Available", price: "$289.99", img: "/image/marmot1.png" },
  { id: 10, title: "Double Trouble", desc: "Available", price: "$289.99", img: "/image/marmot2.png" },
  { id: 11, title: "Mr. Whiskers", desc: "Available", price: "$199.99", img: "/image/marmot3.png" },
  { id: 12, title: "Cool Cheeks", desc: "Available", price: "$234.99", img: "/image/marmot4.png" },
];


  return (
    <div id="product" className="container Product py-5">
      <div className="row">
        <div className="container text-white py-1 mt-2">
            <h1 className="text-primary text-center fs-1 fw-bold section-title mt-5">
             Product
            </h1>
          </div>
        
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4 d-flex mt-4"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <div className="card shadow-sm mx-auto pet-card">
              <div className="card-body text-center">
                <img
                  src={pet.img}
                  alt={pet.title}
                  className="img-fluid pet-img mb-3"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <h5 className="pet-title">{pet.title}</h5>
                <p className="pet-desc text-muted">{pet.desc}</p>

                <div className="d-flex justify-content-center gap-4 mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="dot dot-yellow"></span>
                    <span className="tag-text">Rare</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="dot dot-red"></span>
                    <span className="tag-text">No Paw-tection</span>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="price-text mb-0">{pet.price}</h5>
                  <img
                    src={Pawicon}
                    alt="paw"
                    className="paw-icon"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
