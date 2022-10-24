import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <>
      <p>{props.text} {props.stat}</p>
    </>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const Statistics = (props) => {
  if(props.total === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <StatisticLine text="good" stat={props.good} />
      <StatisticLine text="neutral" stat={props.neutral} />
      <StatisticLine text="bad" stat={props.bad} />
      <StatisticLine text="all" stat={props.total} />
      <StatisticLine text="average" stat={props.average} />
      <StatisticLine text="positive" stat={props.positive} />
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
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <h1>statistics</h1>
      <div>
        <Statistics total={total} average={average} positive={positive} good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

export default App;
