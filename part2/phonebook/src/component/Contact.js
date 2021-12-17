import React from "react"
const Button = ({id,onClick}) => <button onClick = {()=>onClick(id)}>Delete</button>
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
export default Contact