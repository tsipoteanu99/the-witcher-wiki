import React from "react";
import styled from "styled-components";
import background6 from "../assets/background6.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  background-image: url(${background6});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  width: 500px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 2px solid;
  margin: 2px;
  border-radius: 20px;
  border-color: rgb(0, 0, 0, 0);
`;

const ListItem = styled.li`
  font-size: 18px;
  font-weight: 600px;
  margin: 10%;

  img {
    max-width: 300px;
  }
`;

const ListItemTitle = styled.p`
  font-size: 22px;
  color: whitenp;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
`;

function Caractere() {
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
              color: "rgb(255, 255, 255)",
            }}
          >
            Geralt
          </p>
          <img
            src="https://cdn.mos.cms.futurecdn.net/LJRryEShuPXirdoDdR6KDX-1200-80.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <p
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255, 255, 255)",
            }}
          >
            Ciri
          </p>
          <img
            src="https://www.playstationlifestyle.net/assets/uploads/2020/05/ciri-in-the-witcher-3-1280x720.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <p
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255, 255, 255)",
            }}
          >
            Yennefer
          </p>
          <img
            src="https://qph.fs.quoracdn.net/main-qimg-4478051c59099c509bf48fcda8bdfd34"
            alt="silver-sword"
          ></img>
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
              color: "rgb(255, 255, 255)",
            }}
          >
            Triss Merigold
          </p>
          <img
            src="https://steamuserimages-a.akamaihd.net/ugc/925928270281319106/ACB65CBA019E8FBF6C32983FC54B7673FF177A81/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <p
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255, 255, 255)",
            }}
          >
            Vesemir
          </p>
          <img
            src="https://i0.wp.com/witcherhour.com/wp-content/uploads/2020/12/vesemir-witcher-3.jpg?fit=1920%2C1080&ssl=1"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <p
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255, 255, 255)",
            }}
          >
            Dandelion
          </p>
          <img
            src="https://cdn.gamer-network.net/2020/usgamer/witcher-3-dandelion-header.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/heres-what-the-witchers-jaskier-looked-like-with-the-classic-dandelion-hat.jpg"
            alt="silver-sword"
          ></img>
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
              color: "rgb(255, 255, 255)",
            }}
          >
            Zoltan Chivay
          </p>
          <img
            src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/01/The-Witcher-3-Zoltan-Chivay.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <p
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255, 255, 255)",
            }}
          >
            Letho
          </p>
          <img
            src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-witcher-3/e/e2/SQ_Ghosts_Letho1.png"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <p
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255, 255, 255)",
              
            }}
          >
            Emhyr var Emeris
          </p>
          <img
            src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/The-Witcher-3-Emhyr-var-Emreis.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
      </List>
    </Wrapper>
  );
}

export default Caractere;
