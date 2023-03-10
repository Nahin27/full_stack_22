import { useState } from "react";
import Input from "./components/Input.js";
import FormToAdd from "./components/FormToAdd.js";
import Numbers from "./components/Numbers.js";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState("")
  const [filterText, setFilterText] = useState("")

  // Handles a button click to add a new number
  const addNumber = (event) => {
    event.preventDefault();
    console.log('clicked');

    const numberObj = {
      name: newName,
      number: newNum
    }

    const check = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());

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

  const searchInput = (event) => {
    setFilterText(event.target.value) 
  }
  // input handlers end

  const filteredPersons = persons.filter(
    (person) => person.name.toLowerCase().includes(filterText.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Input text="Search" onChange={searchInput} value={filterText}/>
      <h1>Add new</h1>
      <FormToAdd onSubmit={addNumber} nameChange={nameInput} numberChange={numberInput} newName={newName} newNum={newNum}/>

      <h2>Numbers</h2>
      
      <Numbers persons={filteredPersons} />

    </div>
  )
}

export default App;
