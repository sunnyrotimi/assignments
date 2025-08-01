import React from "react";
import { Carousel, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      {/* Bootstrap Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/public/images/vote1.jpg"
            alt="Secure Voting"
          />
          <Carousel.Caption>
            <h3>Secure Online Voting</h3>
            <p>Cast your vote safely from anywhere.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/public/images/vote2.jpg"
            alt="Real-Time Results"
          />
          <Carousel.Caption>
            <h3>Real-Time Results</h3>
            <p>Get instant updates after voting closes.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/public/images/vote3.jpg"
            alt="Fair Elections"
          />
          <Carousel.Caption>
            <h3>Fair & Transparent</h3>
            <p>A secure platform for every election.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Content Section */}
      <div className="text-center p-5">
        <h1 className="mb-3">Welcome to the E-Voting System</h1>
        <p className="mb-4">
          Register, log in, and vote in upcoming elections with ease and security.
        </p>
        <Button href="/register" variant="primary" className="me-3">
          Register
        </Button>
        <Button href="/login" variant="success">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Home;
