import Part from "./Part.js"

const Parts = ({ parts }) => //parts is an array
  <>
    {parts.map((part, i) => <Part name={part.name} exercises={part.exercises} key={i} />)}
  </>

export default Parts