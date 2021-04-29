import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import background3 from "../assets/background3.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background3});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #a7dd3c;
  font-size: 54px;
  color: rgb(60, 160, 140);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 2px rgba(153, 51, 51, 0.8);
`;

function Series() {
  return (
    <Wrapper>
      <Title>Series slider</Title>
      <Carousel style={{ width: "400px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hachettebookgroup.com/wp-content/uploads/2019/09/9780316497541-1.jpg?fit=424%2C675"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-na.ssl-images-amazon.com/images/I/71Q9Ku4ddIL.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.dc5.ro/img-prod/250978489-0.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://onlinereadfreenovel.com/i2/andrzej-sapkowski/blood_of_elves.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-na.ssl-images-amazon.com/images/I/91freY7YmZL.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Baptism_of_Fire_UK.jpg/220px-Baptism_of_Fire_UK.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-na.ssl-images-amazon.com/images/I/71NNz7-OgdL.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://prodimage.images-bn.com/pimages/9780316273718_p0_v2_s1200x630.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-na.ssl-images-amazon.com/images/I/71qzzymtByL.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mobygames.com/images/covers/l/328946-the-witcher-2-assassins-of-kings-enhanced-edition-windows-front-cover.jpg"
            alt="second slide"
          />
          <Carousel.Caption>
            <p></p>
            <p>Joc</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://store-images.s-microsoft.com/image/apps.28990.69531514236615003.8f0d03d6-6311-4c21-a151-834503c2901a.d629260e-2bc4-4588-950c-f278cbc22a64"
            alt="third slide"
          />
          <Carousel.Caption>
            <p>18 mai 2015</p>
            <p>Joc</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/f1/0c/d4/f10cd43fcfffe6b7fa0d0b4a63ae5b04.png"
            alt="second slide"
          />
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
}

export default Series;
