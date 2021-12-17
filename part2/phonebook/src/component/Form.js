import React from "react";
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

export default {Form,Input}