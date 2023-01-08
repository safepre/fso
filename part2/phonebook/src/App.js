import { useState } from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [newFilter,setFilter] = useState('')
  const addName = (event) =>
  {
    event.preventDefault()
    if(persons.find((person) => person.name === newName))
    {
      alert(`${newName} is already added to phonebook`)
    }
    else{
    const nameObj = { name:newName, number:newNumber}
    setPersons(persons.concat(nameObj))
    setNewName('')
    }
  }
  //const handleNameChange = (event) => setNewName(event.target.value)
  //use the bottom one to eliminate redundancy above
  const handleData = setValue => event => setValue(event.target.value)
  
  return (
    <div>
      <h2>Phonebook</h2>
     <Filter filter={newFilter} handleChange={handleData(setFilter)}/>
      <h2>add a new</h2>
     <PersonForm 
      handle = {addName} name = {newName} number = {newNumber} 
      handleChangeName = {handleData(setNewName)} handleChangeNumber = {handleData(setNewNumber)}
     />
      <h2>Numbers</h2>
      <Persons  persons = {persons} filter = {newFilter} />
    </div>
  )
}

export default App