import { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>
          {props.text}
        </button>
    </>
  )
}

const StatLine = ({ text, value }) => {
  if(text === "positive") {
    return (
      <>
        <tbody>
          <tr>
              <td>{text}</td>
              <td>{value} %</td>
          </tr>
        </tbody>
      </>
    )
  }
  return (
    <>
      <tbody>
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
      </tbody>
    </>
  )
}


const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if(total <= 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <table>
      <StatLine text="Good" value={good} />
      <StatLine text="neutral" value={neutral} />
      <StatLine text="bad" value={bad} />
      <StatLine text="total" value={total} />
      <StatLine text="average" value={average} />
      <StatLine text="positive" value={positive} />
    </table>
  )
}

const Headings = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}


const setState = (fn, v) => {
  "Returns a function that calls a function fn on the value v+1"
  const setX = () => {
    fn(v+1)
  }
  return setX;
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + bad + neutral;
  const score = good - bad;
  const average = score / total;
  const positive = good / total * 100;

  return (
    <>
      <Headings text="Give Feedback!" />
      <Button text="Good" handleClick={setState(setGood, good)}/>
      <Button text="Neutral" handleClick={setState(setNeutral, neutral)}/>
      <Button text="Bad" handleClick={setState(setBad, bad)}/>
      <Headings text="Statistics" />
      <Statistics good={good} neutral={neutral} bad = {bad} total={total} average={average} positive={positive} />
    </>
  )
}

export default App;
