import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/menuimg.webp";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> <b>cafe pure</b></h1>
        <p> <b>coffee makes your day</b></p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
