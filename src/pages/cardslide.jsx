import React from 'react'
import Marmot from '../allimg/marmot.png'
import Hamster from '../allimg/hamster.png'
import JJ from '../allimg/jj.png'

function Cardslide() {
  
  return (
    <div  className="container information py-5" id="information" >
      <div className="container text-white py-1 mt-3">
        <h1 className="text-primary text-center fs-1 fw-bold section-title mt-4">
          Information
        </h1>
      </div>

      <div className="row mt-2 g-4">
        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="border border-1 rounded p-3 h-100 d-flex flex-column flex-md-row align-items-center gap-3">
            <img src={Marmot}alt="Marmot" className="img-fluid" style={{ maxWidth: "150px" }}/>
            <div>
              <h2 className="fw-bold text-primary">Marmot</h2>
              <p className="text-muted">
                A marmot is a type of large, ground-dwelling squirrel in the genus
                <em> Marmota</em>, with about 15 species found in Asia, Europe, and
                North America. These stout, heavy rodents are herbivores, known for
                their thick fur, strong digging claws, and winter hibernation.
              </p>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="border border-1 rounded p-3 h-100 d-flex flex-column flex-md-row align-items-center gap-3">
            <div className="order-2 order-md-1">
              <h2 className="fw-bold text-primary">Dog</h2>
              <p className="text-muted">
                Dogs are loyal and friendly animals, often called human’s best friend.
                They come in many breeds and sizes, making them great companions.
              </p>
            </div>
            <img src={JJ} alt="Dog" className="img-fluid order-1 order-md-2" style={{ maxWidth: "180px" }}/>
          </div>
        </div>

        <div className="col-xl-6 col-md-12 col-sm-12 m-auto mt-4">
          <div className="border border-1 rounded p-3 d-flex flex-column flex-md-row align-items-center gap-3">
            <img src={Hamster} alt="Hamster" className="img-fluid" style={{ maxWidth: "150px" }}/>
            <div>
              <h2 className="fw-bold text-primary">Hamster</h2>
              <p className="text-muted">
                Hamsters are small, nocturnal rodents that love to burrow and run on wheels. 
                They are popular as pets because they are cute, playful, and easy to care for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardslide
