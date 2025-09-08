import React from "react";

function InfoCard({ title, image, alt, description, reverse }) {
  return (
    <div className="col-xl-6 col-md-12 col-sm-12 mb-4 m-auto">
      <div className="border border-1 rounded p-3 h-100 d-flex flex-column flex-md-row align-items-center gap-3">
        
        {/* Normal (text right of image) */}
        {!reverse && (
          <img
            src={image}
            alt={alt}
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
        )}

        {/* Text block with responsive order */}
        <div className={reverse ? "order-2 order-md-1" : ""}>
          <h2 className="fw-bold text-primary">{title}</h2>
          <p className="text-muted">{description}</p>
        </div>

        {/* Reversed (desktop: right, mobile: top) */}
        {reverse && (
          <img
            src={image}
            alt={alt}
            className="img-fluid order-1 order-md-2"
            style={{ maxWidth: "159px" }}
          />
        )}
      </div>
    </div>
  );
}

function Cardslide() {
  const cards = [
    {
      title: "Marmot",
      image: "image/marmot.png",
      alt: "Marmot animal",
      description:
        "A marmot is a type of large, ground-dwelling squirrel in the genus Marmota, with about 15 species found in Asia, Europe, and North America. These stout, heavy rodents are herbivores, known for their thick fur, strong digging claws, and winter hibernation.",
    },
    {
      title: "Dog",
      image: "image/jj.png",
      alt: "Dog pet",
      description:
        "Dogs are loyal and friendly animals, often called human’s best friend. They come in many breeds and sizes, making them great companions.",
      reverse: true,
    },
    {
      title: "Hamster",
      image: "image/hamster.png",
      alt: "Hamster pet",
      description:
        "Hamsters are small, nocturnal rodents that love to burrow and run on wheels. They are popular as pets because they are cute, playful, and easy to care for.",
    },
  ];

  return (
    <div className="container information py-5" id="information">
      <div className="container text-white py-1 mt-3">
        <h1 className="text-primary text-center fs-1 fw-bold section-title mt-4">
          Information
        </h1>
      </div>

      <div className="row mt-2 g-4 ">
        {cards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Cardslide;
