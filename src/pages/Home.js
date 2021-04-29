import React from "react";
import styled from "styled-components";
import Griffin from "assets/griffin.jpg";
import background from "../assets/background.jpg";
import ReactPlayer from "react-player";

const Content = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 100px;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #a7dd3c;
  font-size: 98px;
  color: rgb(38, 38, 38);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 2px rgba(153, 51, 51, 0.8);
`;

const playerStyle = {
  marginBottom: "2%",
};

function Home() {
  return (
    <Content>
      <Title>The Witcher Wiki Homepage</Title>
      <ReactPlayer
        style={playerStyle}
        url="https://www.youtube.com/watch?v=ndl1W4ltcmg&ab_channel=Netflix"
      />
      <ReactPlayer
        style={playerStyle}
        url="https://www.youtube.com/watch?v=c0i88t0Kacs&ab_channel=TheWitcher"
      />
    </Content>
  );
}

export default Home;
