import React from "react";
import styled from "styled-components";
import background5 from "../assets/background5.jpg";

const Wrapper = styled.div`
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  background: url(${background5}) fixed center;
  background-image: url(${background5});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 70%;
`;

const ListItem = styled.li`
  font-size: 18px;
  font-weight: 600px;
  margin: 10%;

  img {
    max-width: 300px;
    margin-right: 20px;
  }
`;
const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;
const Description = styled.p`
  color: rgb(255, 255, 255);
`;
const WeaponPhoto = styled.img``;

function Armuri() {
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
              color: "rgb(236, 217, 198)",
            }}
          >
            Scoala de Pisici
          </p>
          <ListContent>
            <img
              src="https://i0.wp.com/twinfinite.net/wp-content/uploads/2015/05/superior-cat-armor-set-look.jpg?fit=1159%2C632&ssl=1"
              alt="silver-sword"
            ></img>
            <Description>
              În călătoriile sale, Geralt s-a regăsit pe urmele unui vrăjitor pe
              nume Kiyan. După ce a auzit povești despre legendarul echipament
              al acestui vrăjitor, Geralt a decis să investigheze, viziunile
              armurilor puternice și ale armelor ascuțite sclipind în fața
              ochilor lui ...
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
              color: "rgb(236, 217, 198)",
            }}
          >
            Scoala de Griffini
          </p>
          <ListContent>
            <img
              src="https://static.gosunoob.com/img/1/2015/05/mastercrafted-griffin-armor-set-look.jpg"
              alt="silver-sword"
            ></img>
            <Description>
              Setul de armura griffin este un set de armuri medii de unelte de
              vrăjitoare inspirate de vrăjitorii din Școala Griffinului. Setul
              include armură pentru piept. Acest set se baza pe armuri folosite
              probabil de legendarul vrăjitor George din Kagen (ucigașul
              dragonului verde din Velen) în trecut.
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
              color: "rgb(236, 217, 198)",
            }}
          >
            Scoala de Lupi
          </p>
          <ListContent>
            <img
              src="https://mhlasopa752.weebly.com/uploads/1/2/6/9/126936869/988367535.jpg"
              alt="silver-sword"
            ></img>
            <Description>
              Stilul de armură este foarte asemănător cu cel al lui Eskel și cel
              al altor vrăjitori ai școlii lupului - jachete stratificate din
              piele și întărite cu știfturi / nituri metalice. Versiunile
              Mastercrafted și Grandmaster întăresc în continuare jacheta
              exterioară cu panouri de armură de zale și spauldere metalice pe
              umeri.
            </Description>
          </ListContent>
        </ListItem>
      </List>
    </Wrapper>
  );
}

export default Armuri;
