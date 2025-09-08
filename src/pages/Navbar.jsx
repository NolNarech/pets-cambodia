import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid d-flex justify-content-between align-items-center">
           
            <a class="navbar-brand fs-3 fw-bold ms-1 text-warning" href="#home">Pets</a>

           
            <div class="d-none d-lg-flex">
            <ul class="navbar-nav flex-row fs-5 ms-auto">
                <li class="nav-item mx-3"><a class="nav-link text-light fw-bold" href="#home">Home</a></li>
                <li class="nav-item mx-3"><a class="nav-link text-light fw-bold" href="#video">Video</a></li>
                <li class="nav-item mx-3"><a class="nav-link text-light fw-bold" href="#product">Product</a></li>
                <li class="nav-item mx-3"><a class="nav-link text-light fw-bold" href="#information">Details</a></li>
                <li class="nav-item mx-3"><a class="nav-link text-light fw-bold" href="#Adoption">Adoption</a></li>
                <li class="nav-item mx-3"><a class="nav-link text-light fw-bold" href="#Service">Services</a></li>
                <li class="nav-item mx-3"><a class="nav-link text-light fw-bold" href="#contact">Contact</a></li>
            </ul>
            </div>

            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
         
                <div class="offcanvas offcanvas-end w-50 d-lg-none text-bg-dark" tabindex="-1"
                id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav fs-4 fw-bold">
                    <li class="nav-item"><a class="nav-link text-light" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link text-light" href="#video">Video</a></li>
                    <li class="nav-item"><a class="nav-link text-light" href="#product">Product</a></li>
                    <li class="nav-item"><a class="nav-link text-light" href="#information">Details</a></li>
                    <li class="nav-item"><a class="nav-link text-light" href="#Adoption">Adoption</a></li>
                    <li class="nav-item"><a class="nav-link text-light" href="#Service">Services</a></li>
                    <li class="nav-item"><a class="nav-link text-light" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Navbar
