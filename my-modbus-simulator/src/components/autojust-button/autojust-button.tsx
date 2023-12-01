import React from "react";
import AutojustIcon from "./svg/icon";
import "./autojust-button.css";

interface AutojustButtonProps {
  url: string;
  marque: string;
  modele: string;
}

const AutojustButton = ({
  url,
  marque,
  modele,
}: AutojustButtonProps): JSX.Element => {
  const handleButtonClick = () => {
    window.open(
      `https://www.autojust.fr/leparking-inspection-de-v%C3%A9hicule?l=${encodeURIComponent(
        url
      )}&ma=${encodeURIComponent(marque)}&mo=${encodeURIComponent(modele)}`
    );
  };

  return (
    <button id="autojust-button" onClick={handleButtonClick}>
      <AutojustIcon />
    </button>
  );
};

export default AutojustButton;
