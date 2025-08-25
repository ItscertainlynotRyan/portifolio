import React from "react";
import "./index.css";
import Card from "./Card";

function App() {
  return (
    <>
      <header>
        <h1 className="titulo">Meu Portfólio</h1>
      </header>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
        <Card />
        <p style={{ marginTop: "20px", maxWidth: "400px", textAlign: "center" }}>
          Olá! Sou apaixonado por tecnologia e desenvolvimento web. Estou sempre buscando aprender novas ferramentas e criar projetos inovadores.
        </p>
      </div>
    </>
  );
}

export default App;