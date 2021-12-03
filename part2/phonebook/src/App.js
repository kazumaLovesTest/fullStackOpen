import React, { useState } from 'react'

const Contact = ({name,number}) => {
  return(
      <li>{name} {number}</li>
    )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '928440178'
  }])

  const [newName, setNewName] = useState('')
  const [newNumber,SetNewNumber] = useState('')

  const addContact = (e) =>{
    e.preventDefault();
    if (newName === '' || newNumber === '')
        alert('You must fill all fields');
    else{
      addName();
    }
  }

  const addName = () =>{
    if (persons.find(person=>person.name === newName))
        alert(`${newName} already in PhoneBook`)
    else{
      const person = {
        name:newName,
        number:newNumber
      }
      setPersons(persons.concat(person));
      setNewName('');
      SetNewNumber('');
    }
  }

  const getNewName = (e) => setNewName(e.target.value) 
  const getNewNumber = (e) => SetNewNumber(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addContact}>
        <div>
          name: <input onChange = {getNewName} value = {newName}/>
        </div>
        <div>
          number: <input onChange = {getNewNumber} value = {newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     
      {persons.map(person =><Contact key={person.name} name = {person.name} number = {person.number}/>)}
     
      ...
    </div>
  )
}

export default App