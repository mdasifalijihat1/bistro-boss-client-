import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import featuredimg from "../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="md:flex items-center justify-center bg-slate-500 bg-opacity-40 pt-20 pb-12 px-36">
        <div>
          <img src={featuredimg} alt="Featured" />
        </div>
        <div className="md:ml-8">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et
            necessitatibus, doloremque commodi porro corrupti minus dignissimos
            doloribus quo facilis.
          </p>
          <button className="btn btn-outline text-white border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

