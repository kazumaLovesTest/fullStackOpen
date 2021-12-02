import React, { useState } from 'react'

const PhoneNumber = ({name}) => {
  return(
      <li>{name}</li>
    )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const addNewName = (e) =>{
    e.preventDefault();
    if (persons.find(person=>person.name === newName))
        alert(`${newName} already in PhoneBook`)
    else if (newName === '')
        alert("Your entry is empty")
    else{
      const person = {
        name:newName
      }
      setPersons(persons.concat(person));
      setNewName('');
    }
  }

  const getNewName = (e) =>{
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addNewName}>
        <div>
          name: <input onChange = {getNewName} value = {newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     
      {persons.map(person =><PhoneNumber key={person.name} name = {person.name}/>)}
     
      ...
    </div>
  )
}

export default App