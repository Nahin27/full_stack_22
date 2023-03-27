import { useState, useEffect } from "react";
import Input from "./components/Input.js";
import FormToAdd from "./components/FormToAdd.js";
import Number from "./components/Number.js";
import numService from "./services/numberService"
import Notification from "./components/Notification.js";
import ErrorMessage from "./components/ErrorMessage.js"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState("")
  const [filterText, setFilterText] = useState("")
  const [msg, setMsg] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => { //renders the content of the url
    numService.renderList()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  // Handles a button click to add a new number
  const addNumber = (event) => {
    event.preventDefault(); // <----- added a semi colon for ur safety
    console.log('clicked')

    const numberObj = {
      name: newName,
      number: newNum
    }

    const check = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());


    if (check) {
      console.log(check.id)
      if(window.confirm(`${numberObj.name} is already added to the phonebook, replace it?`)) {
        const changedPerson = {...check, number: newNum}

        numService.update(changedPerson, check.id)
          .then(() => {
            setMsg(`${changedPerson.name} has been updated successfully!`)
            setTimeout(() => {
              setMsg(null)
            }, 5000)
            setPersons(persons.map(p => p.id === changedPerson.id ? changedPerson : p ))
            setNewName("")
            setNewNum("")
          })
          .catch(error => {
            setErrorMsg(`${changedPerson.name} doesn't exist anymore`)
            setTimeout(() => {
              setErrorMsg(null)
            }, 5000)
          })
      }
    } else { // posts the new number to db.json
      numService.postNum(numberObj)
        .then(number => {
          setMsg(`${number.name} has been added successfully!`)
          setTimeout(() => {
            setMsg(null)
          }, 5000)
          setPersons(persons.concat(number))
          setNewName("")
          setNewNum("")
        })
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

  // delete a number 
  const deleteNum = (id) => {
    console.log(`test ${id}`)
    const deletedPerson = persons.find((person) => person.id === id)
    console.log(deletedPerson.name)

    if(window.confirm(`Do you really want to delete ${deletedPerson.name}`)){
      numService.deleteNum(id)
      .then(() => {
        setMsg(`${deletedPerson.name} has been deleted successfully!`)
        setTimeout(() => {
          setMsg(null)
        }, 5000)
        setPersons(persons.filter(
          (person) => (
            person.id !== id
          )
        ))
      })
      .catch(error => {
        setErrorMsg(`${deletedPerson.name} doesn't exist anymore`)
        setTimeout(() => {
          setErrorMsg(null)
        }, 5000)
      })
    }
  }

  const filteredPersons = persons.filter(
    (person) => person.name.toLowerCase().includes(filterText.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={msg}/>
      <ErrorMessage message={errorMsg} />
      <Input text="Search" onChange={searchInput} value={filterText}/>
      <h1>Add new</h1>
      <FormToAdd onSubmit={addNumber} nameChange={nameInput} numberChange={numberInput} newName={newName} newNum={newNum}/>

      <h2>Numbers</h2>

      {filteredPersons.map(
        (person) => {
          return (
            <Number name={person.name} key={person.id} number={person.number} deleteNum={() => deleteNum(person.id)}/>
          )
        }
      )}

    </div>
  )
}

export default App;
