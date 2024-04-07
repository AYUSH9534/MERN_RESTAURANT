import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Embark on a culinary journey through our diverse selection of non-vegetarian offerings, where every dish is a testament to exquisite taste and exceptional quality. 
            Experience a delectable array of non-vegetarian delights at our restaurant, featuring succulent chicken dishes bursting with flavor and tender mutton specialties cooked to perfection, 
            Savor the tantalizing flavors of our non-vegetarian cuisine, boasting a diverse selection of culinary delights including juicy chicken delicacies and succulent mutton creations, meticulously crafted to satisfy even the most discerning palates with every savory bite.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;