import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum ad
        iste, nobis voluptas consequatur quidem veritatis possimus laudantium
        nemo quas eveniet dolores debitis non unde. Repellendus labore adipisci
        inventore!
      </Header>

      <section className="about_story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              autem reiciendis eaque provident, dolorem, enim iusto excepturi
              laboriosam aliquam accusantium consectetur expedita tempora
              soluta. Odit amet libero rem quod. At!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              autem reiciendis eaque provident, dolorem, enim iusto excepturi
              laboriosam aliquam accusantium consectetur expedita tempora
              soluta. Odit amet libero rem quod. At!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              autem reiciendis eaque provident, dolorem,
            </p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about__story-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              autem reiciendis eaque provident, dolorem, enim iusto excepturi
              laboriosam aliquam accusantium consectetur expedita tempora
              soluta. Odit amet libero rem quod. At!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              autem reiciendis eaque provident, dolorem, enim iusto excepturi
              laboriosam aliquam accusantium consectetur expedita tempora
              soluta. Odit amet libero rem quod. At!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              autem reiciendis eaque provident, dolorem,
            </p>
          </div>

          <div className="about__section-image">
            <img src={VisionImage} alt="Our Story Image" />
          </div>
        </div>
      </section>

      <section className="about_Mission">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              autem reiciendis eaque provident, dolorem, enim iusto excepturi
              laboriosam aliquam accusantium consectetur expedita tempora
              soluta. Odit amet libero rem quod. At!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              autem reiciendis eaque provident, dolorem, enim iusto excepturi
              laboriosam aliquam accusantium consectetur expedita tempora
              soluta. Odit amet libero rem quod. At!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              autem reiciendis eaque provident, dolorem,
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
