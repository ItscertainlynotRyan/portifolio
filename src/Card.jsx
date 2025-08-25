import React from "react";
import imagen from '../src/assets/imagem.jpeg';

function Card() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img
        src={imagen}
        alt="Minha imagem"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

export default Card;