import React, { useState } from 'react'

const Contact = ({persons,filteredContact}) => {
  if (filteredContact === '')
  return(
     <> 
      {persons.map(person=><li key = {person.id}>{person.name} {person.number}</li>)}
    </>
    )
  else return(
    <>
    {persons.filter(person =>person.name.toLocaleLowerCase().includes(filteredContact.toLowerCase()))
    .map(person=><li key = {person.id}>{person.name} {person.number}</li>)}
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber,SetNewNumber] = useState('');
  const [filteredContact,setFilter] = useState('');
  

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
        number:newNumber,
        id:persons.length +1
      }
      setPersons(persons.concat(person));
      setNewName('');
      SetNewNumber('');
    }
  }

  
  const getNewName = (e) => setNewName(e.target.value) 
  const getNewNumber = (e) => SetNewNumber(e.target.value)
  const getFilteredContact = (e) => setFilter(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      filter: <input onChange = {getFilteredContact} value = {filteredContact}/>
      <h2>Add Contacts</h2>
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
      <Contact persons = {persons} filteredContact = {filteredContact} />
      ...
    </div>
  )
}

export default App