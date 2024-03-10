import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">
        <a className="navbar-brand" href="#">LOGO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active mx-2" aria-current="page" href="#home">HOME</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#destination">DESTINATION</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#spots">SPOTS</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#features">FEATURES</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#review">REVIEW</a>
            </li>
          </ul>
          <div className="login-signup d-flex align-items-center">
            <a href="#signup" className="text-white text-decoration-none signup-button">SignUp</a>
            <a href="#login" className="text-white text-decoration-none px-3 py-1 bg-black rounded-3 ml-5">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MainSection() {
  return (
    <main className="texts">
      <section className="d-flex flex-column justify-content-center align-items-center text-white fs-1">
        <h1 className="its">IT'S TIME TO</h1>
        <h1 className="adv">ADVENTURE</h1>
        <p className="par">Welcome to our South India guide! Explore stunning landscapes, vibrant cities, and rich culture. Discover <br/> top spots and create lasting memories.</p>
        <button className="discover">Discover destination</button>
      </section>
    </main>
  );
}

function Nav() {
  return (
    <div className="background-image">
      <Navbar />
      <MainSection />
    </div>
  );
}

export default Nav;
