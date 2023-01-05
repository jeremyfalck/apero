import "./App.css";

import Times from "./time.json";

function App() {
  const today = new Date();

  const minutes = today.getMinutes();

  var minutesString = minutes.toString();

  if (minutes < 10) {
    minutesString = "0" + minutesString;
  }

  const hours = today.getHours();

  const hourToDisplay =
    minutesString == "45" ? ((hours + 1) % 24).toString() + "h" : hours + "h";

  if (minutesString === "00") {
    minutesString = " pile";
  } else if (minutesString === "15") {
    minutesString = " et quart";
  } else if (minutesString === "30") {
    minutesString = " et demie";
  } else if (minutesString === "45") {
    minutesString = " moins le quart";
  }

  const time = hourToDisplay + minutesString;

  const value = Times[minutes] || "de boire";

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Normalement on prend l'apéro entre 18 et 20h. Mais en réalité il est
          toujours l'heure de l'apéro.
        </p>
        <p>
          La preuve: il est {time}, l'heure {value}
        </p>
      </header>
    </div>
  );
}

export default App;
