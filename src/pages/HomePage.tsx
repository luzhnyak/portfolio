import { useEffect } from "react";
import HelloBlock from "../components/HelloBlock/HelloBlock";
import Main from "../components/Main/Main";

// import gameImg from "/game.png";
import Work from "../components/Work/Work";
import GalleryCode from "../components/GalleryCode/GalleryCode";
import { useMediaQuery } from "../hooks/useMediaQuery";

const HomePage = () => {
  useEffect(() => {
    document.title = "Oleh Luzhniak - Portfolio";
  }, []);

  const matches = useMediaQuery("(max-width: 1399px)");

  return (
    <Main justifyContent="center">
      <Work>
        <HelloBlock />
        {!matches && <GalleryCode />}
      </Work>
    </Main>
  );
};

export default HomePage;
