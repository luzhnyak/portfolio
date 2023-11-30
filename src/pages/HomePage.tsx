import { useEffect } from "react";
import HelloBlock from "../components/HelloBlock/HelloBlock";
import Main from "../components/Main/Main";

import gameImg from "/game.png";

const HomePage = () => {
  useEffect(() => {
    document.title = "Oleh Luzhniak - Portfolio";
  }, []);

  return (
    <Main justifyContent="center">
      <HelloBlock />
      <img src={gameImg} />
    </Main>
  );
};

export default HomePage;
