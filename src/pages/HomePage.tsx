import { useEffect } from "react";
import HelloBlock from "../components/HelloBlock/HelloBlock";
import Main from "../components/Main/Main";

// import gameImg from "/game.png";
import Work from "../components/Work/Work";
import GalleryCode from "../components/GalleryCode/GalleryCode";

const HomePage = () => {
  useEffect(() => {
    document.title = "Oleh Luzhniak - Portfolio";
  }, []);

  return (
    <Main justifyContent="center">
      <Work>
        <HelloBlock />
        {/* <img src={gameImg} className="md" /> */}
        <GalleryCode />
      </Work>
    </Main>
  );
};

export default HomePage;
