import Carousel from 'react-bootstrap/Carousel';
import React from "react";

export const Home = () => {
  return (
    <div className="Home">
      <h1 className="title">Welcome to <br/>Snack-a-log!</h1>
      <h3 className="title1">Wholesome Organic Snacks The Way Mother Nature Intended</h3>
      <br/><br/><br/>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="pics d-block w-auto"
            src="https://bit.ly/3QYRtLM"
            alt="Oranges"
          />
          <Carousel.Caption className="Caption">
            <h2 className="Cap glow">California Oranges</h2>
            <h4 className="Cap glow">Fresh Organic California Oranges!</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-auto"
            src="https://bit.ly/3wlzcQQ"
            alt="Strawberries"
          />
          <Carousel.Caption className="Caption">
            <h2 className="Cap glow">Tortona Strawberry</h2>
            <h4 className="Cap glow">Savor Strawberries from Italy!</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-auto"
            src="https://bit.ly/3CnnCIA"
            alt="Mango"
          />
          <Carousel.Caption>
            <h2 className="Cap glow">Kesar Mangoes</h2>
            <h4 className="Cap glow">
              Enjoy<br /> Kesar Mangoes <br />from the Junagadh region of India!
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br/><br/>
      <h2 className="subtitle"><strong>You Know You Want Some Of This Natural Goodness</strong></h2>
      <div className="PursuitApproved">
        <img
          className="pic1 d-block w-auto"
          src="https://images.squarespace-cdn.com/content/v1/5ea906bfb2891a7f00d30604/1591593368495-WTN6Z0NU1GKJ9N2PO90B/Pursuit%2BLogo%2BBlack.png?format=300w"
          alt="Pursuit Approved"
        />
        <h3 className="pic1">Pursuit Approved Sancks </h3>
        </div>
    </div>
  );
}

export default Home;