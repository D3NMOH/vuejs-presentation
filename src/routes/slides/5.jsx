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
        <p>
          In React wird JSX verwendet, um die Struktur von Komponenten zu
          definieren, was es ermöglicht, einen HTML-ähnlichen Syntax direkt in
          JavaScript einzubetten.
        </p>
        <p>
          In Vue.js besteht die Vorlage aus gewöhnlichem HTML-Code, der direkt
          in den Komponentendateien verwendet werden kann. Vorlagen können
          Vue.js-Direktiven enthalten, um Daten und Zustand zu verwalten.
        </p>
        <span style={{ fontSize: "40px" }}>
          Funktionskomponente (React) vs. Einzelfilkomponente (Vue.js):
        </span>
        <p>
          In React sind Funktionskomponenten einfache JavaScript-Funktionen, die
          virtuelle DOM-Elemente mit JSX zurückgeben.
        </p>
        <p>
          In Vue.js kombinieren Einzelfilkomponenten HTML-Vorlage,
          JavaScript-Logik und Stile in einer einzigen Datei mit der Erweiterung
          .vue. Dies erleichtert die Organisation von Komponenten in einer Datei
          und die Unterstützung aller Aspekte einer Komponente an einem Ort.
        </p>
        <p></p>
        <span style={{ fontSize: "40px" }}>
          Verwendung von Direktiven (Vue.js)
        </span>
        <p>
          In Vue.js können Direktiven wie v-if, v-for, v-bind, v-on und andere
          verwendet werden, um dynamisches Verhalten zu den Elementen in der
          Vorlage einer Komponente hinzuzufügen.
        </p>
        <p>
          In React werden für ähnliche Funktionen
          JavaScript-Bedingungsanweisungen (z. B. if oder bedingte Ausdrücke)
          und Array-Methoden (z. B. map) verwendet.
        </p>
        <br />
        <br />
        <span style={{ fontSize: "40px" }}>Fazit</span>
        <p>
          Beide Ansätze haben ihre Vor- und Nachteile, und die Wahl zwischen
          ihnen kann von den Vorlieben des Entwicklers und den Anforderungen des
          Projekts abhängen.
        </p>
      </p>
    </div>
  );
}
