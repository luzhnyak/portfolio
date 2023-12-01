import { useEffect } from "react";
import HelloBlock from "../components/HelloBlock/HelloBlock";
import Main from "../components/Main/Main";

import gameImg from "/game.png";
import Work from "../components/Work/Work";

const HomePage = () => {
  useEffect(() => {
    document.title = "Oleh Luzhniak - Portfolio";
  }, []);

  return (
    <Main justifyContent="center">
      <Work>
        <HelloBlock />
        <img src={gameImg} className="md" />
      </Work>
    </Main>
  );
};

export default HomePage;
