import React from "react";
import styled from "styled-components";
import background7 from "../assets/background7.jpg";

const Wrapper = styled.div`
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  background : url(${background7}) fixed center;
  background-image: url(${background7});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment : fixed;
  width : 100%;
  flex-wrap : wrap;
  
  
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
  border-color: rgb(255,255,255, 0.7);
  
`;

const ListItem = styled.li`
  font-size: 18px;
  font-weight: 600px;
  margin: 10%;
  color: "rgb(255,255,255)";
  

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
const Culoare = styled.h2`
  color: rgb(236, 217, 198);
`;

function Bestiar() {
  return (
    <Wrapper>
      <List>
        <Culoare>Bestii</Culoare>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Ursi
          </ListItemTitle>
          <img
            src="https://external-preview.redd.it/E2rBNGaQi5gP-Dpp6byJghkGyLWhuVJM1sRzcrLrKG4.png?auto=webp&s=ffd94128b8eaa351ec53601d2abf61053570ca91"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Lupi
          </ListItemTitle>
          <img
            src="https://img3.goodfon.com/wallpaper/nbig/9/b0/the-witcher-wild-hunt-the.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Mistreti
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/Wild_Boar.png"
            alt="silver-sword"
          ></img>
        </ListItem>
      </List>

      <List>
        <Culoare>Blestemati</Culoare>
        
        
        
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Bersekeri
          </ListItemTitle>
          <img
            src="https://i.ytimg.com/vi/lI6XqSMZhDs/maxresdefault.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Botchlings
          </ListItemTitle>
          <img
            src="https://cdn3.whatculture.com/images/2016/11/f6cc0ca477822bd5-600x338.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Varcolac
          </ListItemTitle>
          <img
            src="https://i.pinimg.com/originals/83/c0/fe/83c0fe5c487805a13e15d89f6b617647.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
      </List>

      <List>
        <Culoare>Draconide</Culoare>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Basiliscuri
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/basilisk.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Cockatrice
          </ListItemTitle>
          <img
            src="https://cdna.artstation.com/p/assets/images/images/022/782/042/large/ivan-roujev-ivan-roujev-witcher-fanart-02-cockatrice.jpg?1576671133"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Wyverns
          </ListItemTitle>
          <img
            src="https://i.ytimg.com/vi/b4alSTVroBg/maxresdefault.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
      </List>

      <List>
        <Culoare>Elemental</Culoare>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Djinn
          </ListItemTitle>
          <img
            src="https://staticdelivery.nexusmods.com/images/952/4110478-1574436818.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Elemental de Pamant
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/therazane.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Gargayol
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/gargoyle.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
      </List>

      <List>
        <Culoare>Hibrizi</Culoare>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Griffin
          </ListItemTitle>
          <img
            src="https://i.pinimg.com/originals/86/6b/8f/866b8fe790ed9db50090d77f1f1d7940.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
           Sirena
          </ListItemTitle>
          <img
            src="https://www.researchgate.net/profile/Sarah-Stang/publication/322665726/figure/fig2/AS:631597539815494@1527595996602/A-Siren-from-The-Witcher-3-Wild-Hunt-CD-Projekt-RED-2015.png"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Succcubus
          </ListItemTitle>
          <img
            src="https://i.pinimg.com/736x/08/ed/4f/08ed4fc121c2f8699f43781fb809b928.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
      </List>
      <List>
        <Culoare>Insectoide</Culoare>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Arachasae
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/arachas.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Crab de nisip
          </ListItemTitle>
          <img
            src="https://i.ytimg.com/vi/PZv1RkgKh0w/maxresdefault.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Razboinici Endrega
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/endrega_warrior.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
      </List>
      <List>
        <Culoare>Necrofagi</Culoare>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Ghoul
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/alghoul-witcher3.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Devorator
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/rotfiend.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Drowner
          </ListItemTitle>
          <img
            src="data:image/jpeg;base64,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"
            alt="silver-sword"
          ></img>
        </ListItem>
      </List>
      <List>
        <Culoare>Ogroizi</Culoare>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Ciclop
          </ListItemTitle>
          <img
            src="https://i.pinimg.com/originals/88/87/7d/88877dfff2c28872a57fd0920e1147d2.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Troll
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/rock_troll.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Nekker
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/Hagubman.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
      </List>
      <List>
        <Culoare>Relicturi</Culoare>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Godling
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/The_Witcher_3_Wild_Hunt-Johny_the_Godlingthumb.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Fiend
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/fiend.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Leshen
          </ListItemTitle>
          <img
            src="https://i.ytimg.com/vi/hurcpIBLxYY/maxresdefault.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
      </List>
      <List>
        <Culoare>Spectre</Culoare>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Wraith
          </ListItemTitle>
          <img
            src="https://live.staticflickr.com/813/25948642567_5473f92e2a_b.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Hym
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/hym.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Ethereal
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/Ethereal.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
      </List>
      <List>
        <Culoare>Vampiri</Culoare>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Ekimmara
          </ListItemTitle>
          <img
            src="https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/ekimmara-witcher3-creature.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Katakan
          </ListItemTitle>
          <img
            src="https://i.pinimg.com/originals/8a/08/a0/8a08a02991f6fbef900bf31a04da3f8d.jpg"
            alt="silver-sword"
          ></img>
        </ListItem>
        <ListItem>
          <ListItemTitle
            className="text-center"
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(255,255,255)",
            }}
          >
            Higher Vampire
          </ListItemTitle>
          <img
            src="https://i.pinimg.com/originals/2f/0a/2f/2f0a2f5bfc8a91447d96a620b5d9cc61.png"
            alt="silver-sword"
          ></img>
        </ListItem>
      </List>
    </Wrapper>
  );
}

export default Bestiar;
