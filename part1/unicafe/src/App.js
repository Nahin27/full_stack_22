import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
      <p>all {props.total}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive} %</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = good + bad + neutral
  let average = ((good * 1) + (bad*-1)) / total
  let positive = good / total * 100
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <h1>statistics</h1>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <Statistics total={total} average={average} positive={positive} />
      </div>
    </div>
  )
}

export default App;
