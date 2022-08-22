import Carousel from 'react-bootstrap/Carousel';
import React from "react";

export const Home = () => {
  return (
  <div className="Home">
    <h1>Welcome to Snack-a-log!</h1>

    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-auto"
          src="https://bit.ly/3QYRtLM"
          alt="Oranges"
        />
        <Carousel.Caption>
        <h2>California Oranges</h2>
          <h4>Delicious California Oranges!</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="Slide"
          className="d-block w-auto"
          src="https://bit.ly/3wlzcQQ"
          alt="Strawberries"
        />
        <Carousel.Caption>
          <h2>Tortona Strawberry</h2>
          <h4>Savor Strawberries from Italy!</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-auto"
          src="https://bit.ly/3CnnCIA"
          alt="Mango"
        />
        <Carousel.Caption>
          <h2>Kesar Mangoes</h2>
          <h4>
           Enjoy Kesar Mangoes from the Junagadh region of India!
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1>You Know You Want You Some Of This Natural Goodness</h1>
    </div>
  );
}

export default Home;