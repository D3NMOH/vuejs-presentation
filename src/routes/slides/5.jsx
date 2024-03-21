export default function Slide4() {
  return (
    <div className="slide">
      <p className="themeItem">
        <span>
          Ein Beispiel für das Schreiben von Hello World in React und Vue JS:
        </span>
        <br /> <br />
        <div className="codeFrameHead">
          <p className="codeFrameTitle">jsx</p>
          <p className="codeFrame">
            <span style={{ color: "lightcoral", fontWeight: 400 }}>import</span>{" "}
            <span>React</span> from{" "}
            <span style={{ color: "skyblue", fontWeight: 400 }}>'react'</span>
            ;
            <br />
            <br />
            <span style={{ color: "lightcoral", fontWeight: 400 }}>
              const
            </span>{" "}
            <span style={{ color: "skyblue", fontWeight: 400 }}>
              HelloWorld
            </span>{" "}
            = () => {"{"} <br />
            <span style={{ color: "lightcoral", fontWeight: 400 }}>
              return{" "}
            </span>
            {"<div>"}Hello, World!{"</div>;"}
            <br />
            {"};"}
            <br />
            <br />
            <span style={{ color: "lightcoral", fontWeight: 400 }}>
              export
            </span>{" "}
            default{" "}
            <span style={{ color: "skyblue", fontWeight: 400 }}>
              HelloWorld
            </span>
            ;
          </p>
        </div>
        <br />
        <div className="codeFrameHead">
          <p className="codeFrameTitle">vue</p>
          <p className="codeFrame">
            {"<template>"} <br />
            {"<div>"}Hello, World!{"</div>;"} <br />
            {"</template>"}
            <br />
            <br />
            {"<script>"}
            <br />
            <span style={{ color: "lightcoral", fontWeight: 400 }}>
              export
            </span>{" "}
            default {"{"}
            <br />
            {"name: 'HelloWorld'"}
            <br />
            {"};"}
            <br />
            {"</script>"}
            <br />
            <br />
            {"<style scoped>"}
            <br />
            /* Component styling */
            <br />
            {"</style>"}
          </p>
        </div>
      </p>
      <p className="themeItem">
        <span style={{ fontSize: "50px" }}>Vergleichsanalyse:</span>
        <br />
        <span style={{ fontSize: "40px" }}>
          JSX-Syntax (React) vs. Vorlage (Vue.js):
        </span>
        <p></p>
        <span style={{ fontSize: "40px" }}>
          Funktionskomponente (React) vs. Einzelfilkomponente (Vue.js):
        </span>
        <br />
        <p></p>
        <span style={{ fontSize: "40px" }}>
          Verwendung von Direktiven (Vue.js)
        </span>
        <br />
        <p></p>
        <p></p>
      </p>
    </div>
  );
}
