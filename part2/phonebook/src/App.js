import React, { useState,useEffect } from 'react'
import services from './services/phoneNumbers'
import Contact from './component/Contact'
import Form from './component/Form'
import Notification from './component/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber,setNewNumber] = useState('');
  const [filteredContact,setFilter] = useState('');
  const [notification,setNotification] = useState('')
  useEffect(()=>{
    services.getAll().then(phoneNumbers =>{
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
    if (persons.find(person=>person.name == newName))
    {
      if (persons.find(person=>person.number == newNumber))
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
      services.create(newPerson)
              .then(sentPerson=>{
                  setPersons(persons.concat(sentPerson));
                  setNotification(`${newPerson.name} was added to your phonebook`) 
              })
              .catch(error => {
                console.log(error.response.data)
                setNotification(`${error.response.data.error}`)
              })
              resetState()
            }
  }
  const changeNumber = (changedContact) =>{
    services.update(changedContact)
            .then(recievedContact =>{
              setPersons(persons.map(person => person.id !== recievedContact.id
                ?person:recievedContact))
              setNotification(`${recievedContact.name} was added to your phonebook`)
            })
            .catch(error =>{
              setNotification(`${error.response.data.error}`)
            })
            resetState()
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
  
  const resetState = () =>{
    setNewName('');
    setNewNumber('');
    setTimeout(()=>{
      setNotification('')
      },3000)
  }
  const getNewName = (e) => setNewName(e.target.value) 
  const getNewNumber = (e) => setNewNumber(e.target.value)
  const getFilteredContact = (e) => setFilter(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification = {notification} />
      <Form.Input onChange = {getFilteredContact} value = {filteredContact} text = "Show By:"/>
      <h2>Add Contacts</h2>
      <Form.Form onSubmit = {addContact} getNewName = {getNewName} getNewNumber ={getNewNumber} newName ={newName} newNumber = {newNumber} />
      <h2>Numbers</h2>
      <Contact persons = {persons} filteredContact = {filteredContact} removeContact ={removeContact}/>
      ...
    </div>
  )
}

export default App