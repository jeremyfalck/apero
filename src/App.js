import "./App.css";

import Times from "./time.json";

function App() {
  const today = new Date();

  var minutes = today.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const hours = today.getHours();

  const time =
    minutes != "00" ? hours + "h" + minutes : hours + "h" + " " + "pile";

  const isAperoTime =
    (hours >= 18 && hours >= 20) || (hours >= 11 && hours <= 13);

  const value = Times[minutes] || "de boire";

  return (
    <div className="App">
      <header className="App-header">
        {isAperoTime ? (
          <p>Il est bien l'heure de l'apéro</p>
        ) : (
          <NoAperoTime time={time} value={value} />
        )}
      </header>
    </div>
  );
}

function NoAperoTime({ time, value }) {
  return (
    <>
      <p>
        Normalement on prend l'apéro entre 18 et 20h. Mais en réalité il est
        toujours l'heure de l'apéro.
      </p>
      <p>
        La preuve: il est {time}, l'heure {value}
      </p>
    </>
  );
}

export default App;
