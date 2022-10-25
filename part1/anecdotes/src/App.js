import { useState } from 'react'

const DisplayAnecdote = (props) => {
  return (
    <>
      <p>{props.anecdote}</p>
      <p>has {props.points} votes</p>
    </>
  )
}

const Title = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  console.log(points);

  const vote = () => {
    const points_copy = [...points]
    points_copy[selected] += 1
    setPoints(points_copy)
  }

  const randomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))



  return (
    <div>
      <Title text="Anecdote of the week" />
      <DisplayAnecdote anecdote={anecdotes[selected]} points={points[selected]} />
      <div>
        <Button onClick={vote} text="vote" />
        <Button onClick={randomAnecdote} text="next anecdote" />
      </div>
      <Title text="Anecdote with most votes" />
      <DisplayAnecdote anecdote={anecdotes[points.indexOf(Math.max(...points))]} points={Math.max(...points)} />
    </div>
  )
}


export default App;
