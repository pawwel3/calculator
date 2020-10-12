import React from "react";
import "./App.css";

const App = (props) => {
  const [result, setResult] = React.useState(startValue);
  const [nr1, setNr1] = React.useState("");
  const [nr2, setNr2] = React.useState("");
  const [symbol, setSymbol] = React.useState("");

  const handleMathClick = (type, number = 1) => {
    const numer1 = parseInt(nr1);
    const numer2 = parseInt(nr2);
    if (symbol === "") {
      if (type === "number") {
        setNr1(nr1 + number);
        setResult(result);
        setNr2(nr2);
        setSymbol(symbol);
      } else if (type === "addition") {
        setNr1(nr1);
        setResult(result);
        setNr2(nr2);
        setSymbol("+");
      } else if (type === "subtraction") {
        setNr1(nr1);
        setResult(result);
        setNr2(nr2);
        setSymbol("-");
      } else if (type === "reset") {
        setNr1("");
        setResult("");
        setNr2("");
        setSymbol("");
      } else if (type === "multiplication") {
        setNr1(nr1);
        setResult(result);
        setNr2(nr2);
        setSymbol("*");
      } else if (type === "division") {
        setNr1(nr1);
        setResult(result);
        setNr2(nr2);
        setSymbol("/");
      }
    } else {
      if (type === "number") {
        setNr1(nr1);
        setResult(result);
        setNr2(nr2 + number);
        setSymbol(symbol);
      } else if (type === "addition") {
        setNr1(nr1);
        setResult(numer1 + numer2);
        setNr2(nr2);
        setSymbol("+");
      } else if (type === "score") {
        if (symbol === "+") {
          setNr1(nr1);
          setResult(numer1 + numer2);
          setNr2(nr2);
          setSymbol(symbol);
        } else if (symbol === "-") {
          setNr1(nr1);
          setResult(numer1 - numer2);
          setNr2(nr2);
          setSymbol(symbol);
        } else if (symbol === "*") {
          setNr1(nr1);
          setResult(numer1 * numer2);
          setNr2(nr2);
          setSymbol(symbol);
        } else if (symbol === "/") {
          setNr1(nr1);
          setResult(numer1 / numer2);
          setNr2(nr2);
          setSymbol(symbol);
        }
      } else if (type === "subtraction") {
        setNr1(nr1);
        setResult(result);
        setNr2(nr2);
        setSymbol("-");
      } else if (type === "reset") {
        setNr1("");
        setResult("");
        setNr2("");
        setSymbol("");
      }
    }
  };
  return (
    <div className="contener">
      <ResultPanel nr1={nr1} result={result} nr2={nr2} symbol={symbol} />
      <div>
        <MathButton name="7" number="7" type="number" click={handleMathClick} />
        <MathButton name="8" number="8" type="number" click={handleMathClick} />
        <MathButton name="9" number="9" type="number" click={handleMathClick} />
        <MathButton
          name="+"
          number="+"
          type="addition"
          click={handleMathClick}
        />
      </div>
      <div>
        {" "}
        <MathButton name="4" number="4" type="number" click={handleMathClick} />
        <MathButton name="5" number="5" type="number" click={handleMathClick} />
        <MathButton name="6" number="6" type="number" click={handleMathClick} />
        <MathButton
          name="-"
          number="-"
          type="subtraction"
          click={handleMathClick}
        />
      </div>
      <div>
        <MathButton name="3" number="3" type="number" click={handleMathClick} />
        <MathButton name="2" number="2" type="number" click={handleMathClick} />
        <MathButton name="1" number="1" type="number" click={handleMathClick} />

        <MathButton
          name="*"
          number="*"
          type="multiplication"
          click={handleMathClick}
        />
      </div>
      <div>
        <MathButton name="C" number="0" type="reset" click={handleMathClick} />
        <MathButton name="0" number="0" type="number" click={handleMathClick} />
        <MathButton
          name="/"
          number="/"
          type="division"
          click={handleMathClick}
        />
        <MathButton name="=" number="=" type="score" click={handleMathClick} />
      </div>
    </div>
  );
};
const MathButton = (props) => {
  const number = parseInt(props.number);
  return (
    <button onClick={() => props.click(props.type, number)}>
      {props.name}
    </button>
  );
};
const ResultPanel = (props) => {
  return (
    <div className="result">
      <h2> {props.nr1}</h2>

      <h2>{props.symbol}</h2>
      <h2>{props.nr2}</h2>
      <h2>Wynik:{props.result}</h2>
    </div>
  );
};
const startValue = "";

//ReactDOM(<App result={startValue} />, document.getElementById("rood"));
export default App;
