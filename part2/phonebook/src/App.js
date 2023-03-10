import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{
      name: "Arto Hellas",
      number: "0176271234",
    },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState("")

  // Handles a button click to add a new number
  const addNumber = (event) => {
    event.preventDefault();
    console.log('clicked');

    const numberObj = {
      name: newName,
      number: newNum
    }

    const check = persons.find(person => person.name === newName);

    if (check) {
      alert(`${numberObj.name} is already added to the phonebook`)
    } else {      
      setPersons(persons.concat(numberObj))
      setNewName("");
      setNewNum("");
    }

  }

  // Handles the input fields
  const nameInput = (event) => {
    setNewName(event.target.value);
  }

  const numberInput = (event) => {
    setNewNum(event.target.value)
  }
  // input handlers end

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addNumber}> 
        <div>
          name: <input onChange={nameInput} value={newName}/>
          Number: <input onChange={numberInput} value={newNum}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      
      <Numbers persons={persons} />

    </div>
  )
}

const Number = ({ name, number }) => {
  return <li>{name} {number}</li>
}

const Numbers = ({ persons }) => (
  <ul>
    {persons.map(
      (person) => (
        <Number name={person.name} key={person.name} number={person.number}/>
      )
    )}
  </ul>
)

export default App;
