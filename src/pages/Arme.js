import React from "react";
import styled from "styled-components";
import background4 from "../assets/background4.jpg";

const Wrapper = styled.div`
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  background : url(${background4}) fixed center;
  background-image: url(${background4});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment : fixed;
  
  
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap : wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: line;
  width : 70% ;
`;

const ListItem = styled.li`
  font-size: 18px;
  font-weight: 600px;
  margin: 10%;

  img {
    max-width: 300px;
    margin-right : 20px;
  } 
`;
const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
  height : auto;
  width : 100%;
`;
const Description = styled.p`
  color: rgb(255, 255, 255);
`;
const WeaponPhoto = styled.img``;

function Arme() {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <p
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
              textDecoration : "underline",
              color: "rgb(236, 217, 198)",
            }}
          >
            Sabie de argint
          </p>
          <ListContent>
            <img
              src="https://media.sketchfab.com/models/ac6bb5f69f054446b99ba11943c6b7b6/thumbnails/a356f5c2bad04229a5260c20e445db93/07364890628d493d88620d581a2f0962.jpeg"
              alt="silver-sword"
            ></img>
            <Description>
              Sabia de argint este o sabie specializată în tradiția Witcher,
              care este folosită în primul rând pentru a combate dușmanii
              supranaturali. După cum sugerează și numele, argintul este esența
              proprietăților speciale ale armei, deoarece multe ființe sunt
              deosebit de vulnerabile la aceasta.
            </Description>
          </ListContent>
        </ListItem>
        <ListItem>
          <p
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255",
              textDecoration : "underline",
              color: "rgb(236, 217, 198)",
            }}
          >
            Sabie de otel
          </p>
          <ListContent>
            <img
              src="https://cdnb.artstation.com/p/assets/images/images/004/211/983/large/billy-lundevall-tilted-low.jpg?1481386239"
              alt="silver-sword"
            ></img>
            <Description>
              Sabiile de oțel sunt folosite cel mai bine împotriva fiarelor
              non-magice, a oamenilor și a non-oamenilor
            </Description>
          </ListContent>
        </ListItem>
        <ListItem>
          <p
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255",
              textDecoration : "underline",
              color: "rgb(236, 217, 198)",
            }}
          >
            Arbaleta
          </p>
          <ListContent>
            <img
              src="https://img1.cgtrader.com/items/776248/b0dd085f71/witcher-crossbow-3d-model-low-poly-max-obj-fbx-unitypackage.jpg"
              alt="silver-sword"
            ></img>
            <Description>
              Arbaleta este folosită cel mai bine pentru doborârea dușmanilor
              zburători și pentru atacarea de la distanță. În plus, arbaleta
              este singura armă disponibilă pentru utilizare în timpul înotului
              sau pilotarea unei barci. Poate fi folosit și călare.
            </Description>
          </ListContent>
        </ListItem>
      </List>
    </Wrapper>
  );
}

export default Arme;
