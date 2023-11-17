import {  } from "react";
import benner from "../../../public/college-background.jpg";
import { Link } from "react-router-dom";

const Benner = () => {
  return (
    <div className="hero h-96" style={{ backgroundImage: `url(${benner})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            TAKE THE FIRST STEP TO KNOWLEDGE WITH US{" "}
          </h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. </p>
          <Link to="/allcollege">
            <button className="btn btn-warning">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Benner;
