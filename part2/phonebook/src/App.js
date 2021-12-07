import React, { useState,useEffect } from 'react'
import services from './services/phoneNumbers'

const Button = ({id,onClick}) => <button onClick = {()=>onClick(id)}>Delete</button>
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
const Contact = ({persons,filteredContact,removeContact}) => {
  if (filteredContact === '')
  return(
     <> 
      {persons.map(person=>{
      return(
        <div key = {person.id}>
          <li >{person.name} {person.number}</li>
          <Button onClick = {removeContact} id = {person.id} />
      </div>
      )
    })}
    </>
    )
  else return(
    <>
    {persons.filter(person =>person.name.toLocaleLowerCase().includes(filteredContact.toLowerCase()))
    .map(person=>{
      return(
        <div key = {person.id}>
          <li >{person.name} {person.number}</li>
          <Button onClick = {removeContact} id = {person.id} />
      </div>
      )
    })}
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber,setNewNumber] = useState('');
  const [filteredContact,setFilter] = useState('');
  
  useEffect(()=>{
    services.getAll().then(phoneNumbers =>{
      console.log(phoneNumbers)
      setPersons(phoneNumbers);
    })
    
  },[]) 

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
    {
      if (persons.find(person=>person.number === newNumber))
        alert(`${newName} already in PhoneBook`)
      else {
        const contactToChange = persons.find(person=>person.name === newName)
        const changedContact = {...contactToChange, number:newNumber}
        changeNumber(changedContact)
      }
    }
      
    else{
      const newPerson = {
        name:newName,
        number:newNumber,
      }
      services.create(newPerson).then(sentPerson=>{
        setPersons(persons.concat(sentPerson));
        setNewName('');
        setNewNumber('');
      })
    }
  }
  const changeNumber = (changedContact) =>{
    services.update(changedContact)
            .then(recievedContact =>{
              setPersons(persons.map(person => person.id !== recievedContact.id
                                                              ?person:recievedContact))
              setNewName('');
              setNewNumber('');
            })
  }
  const removeContact = id => {
    const makeSure = window.confirm("Are you sure you want to remove this contact?");
    if(makeSure)
      {
        services.remove(id).then(phoneNumbers =>{
          setPersons(phoneNumbers.filter(phoneNumber => (phoneNumber.id !== id)));
        })
     }
  }
  
  
  const getNewName = (e) => setNewName(e.target.value) 
  const getNewNumber = (e) => setNewNumber(e.target.value)
  const getFilteredContact = (e) => setFilter(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Input onChange = {getFilteredContact} value = {filteredContact} text = "Show By:"/>
      <h2>Add Contacts</h2>
      <Form onSubmit = {addContact} getNewName = {getNewName} getNewNumber ={getNewNumber} newName ={newName} newNumber = {newNumber} />
      <h2>Numbers</h2>
      <Contact persons = {persons} filteredContact = {filteredContact} removeContact ={removeContact}/>
      ...
    </div>
  )
}

export default App