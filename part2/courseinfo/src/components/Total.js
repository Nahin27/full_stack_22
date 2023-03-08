const Total = ({ parts }) => { //parts is an array
    const total = parts.reduce(
      (sum, part) => sum + part.exercises, 0)
  
    return (    
    <>
      <p><strong>Total of {total} exercises</strong></p>
    </>
    )
  }

export default Total