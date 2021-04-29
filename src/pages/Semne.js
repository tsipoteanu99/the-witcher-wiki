import React from "react";
import styled from "styled-components";
import background2 from "../assets/background2.jpg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url(${background2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  width: 500px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const ListItem = styled.li`
  font-size: 18px;
  font-weight: 600px;
  margin: 10%;

  img {
    max-width: 300px;
  }
`;
const Title = styled.h1`
  font-size: 22px;
  width: 400px;
  color: rgb(255, 255, 255);
`;
function Semne() {
  return (
    <Wrapper>
      <Title className="text-center">
        Semnele sunt vrăji magice simple, dar puternice, cu o singură mână, care
        sunt utilizate în mod obișnuit de witcheri. Nu sunt la fel de eficiente
        ca vrăjile magice cu putere maximă, dar permit witcherilor să fie mai
        versatili împotriva adversarilor lor și sunt minunate de folosit în
        bătălie. Există un total de 5 semne: Aard, Axii, Igni, Quen și Yrden.
      </Title>
      <ContentWrapper>
        <List>
          <ListItem>
            <p
              className="text-center"
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginTop: "20px",
                marginBottom: "20px",
                color: "rgb(51, 51, 255)",
                textShadow: "0px 0px 2px  rgb(128, 128, 255)  ",
              }}
            >
              Aard
            </p>
            <img src="https://i.imgur.com/t5j4hkL.png" alt="silver-sword"></img>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <p
              className="text-center"
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginTop: "20px",
                marginBottom: "20px",
                color: "rgb(46, 184, 46)",
                textShadow: "0px 0px 5px  rgb(102, 255, 102)",
              }}
            >
              Axii
            </p>
            <img src="https://i.imgur.com/abKaEZH.png" alt="silver-sword"></img>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <p
              className="text-center"
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginTop: "20px",
                marginBottom: "20px",
                color: "rgb(204,21,57)",
                textShadow: "0px 0px 5px  rgb(255, 102, 0) ",
              }}
            >
              Igni
            </p>
            <img src="https://i.imgur.com/fjl6Eso.png" alt="silver-sword"></img>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <p
              className="text-center"
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginTop: "20px",
                marginBottom: "20px",
                color: "rgb(255, 255, 0)",
                textShadow: "0px 0px 3px  rgb(255, 255, 102)",
              }}
            >
              Quen
            </p>
            <img src="https://i.imgur.com/YNtcBIj.png" alt="silver-sword"></img>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <p
              className="text-center"
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginTop: "20px",
                marginBottom: "20px",
                color: "rgb(255, 0, 255)",
                textShadow: "0px 0px 3px  rgb(255, 102, 255)",
              }}
            >
              Yrden
            </p>
            <img src="https://i.imgur.com/PsWr7bU.png" alt="silver-sword"></img>
          </ListItem>
        </List>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Semne;
