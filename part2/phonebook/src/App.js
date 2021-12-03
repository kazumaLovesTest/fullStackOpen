import React, { useState } from 'react'

const Input = ({text,onChange,value}) => <div>{text} <input onChange = {onChange} value = {value}/> </div>
const Form = ({onSubmit,getNewName,getNewNumber,newName,newNumber}) =>{
  return(
    <form onSubmit = {onSubmit}>
      <Input onChange = {getNewName} value = {newName} text = "name:"/>
      <Input onChange = {getNewNumber} value = {newNumber} text = "number"/>
      <button type="submit">add</button>
      </form>
  )
}
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
      <Input onChange = {getFilteredContact} value = {filteredContact} text = "Show By:"/>
      <h2>Add Contacts</h2>
      <Form onSubmit = {addContact} getNewName = {getNewName} getNewNumber ={getNewNumber} newName ={newName} newNumber = {newNumber} />
      <h2>Numbers</h2>
      <Contact persons = {persons} filteredContact = {filteredContact} />
      ...
    </div>
  )
}

export default App