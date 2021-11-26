import React from 'react'

const Header = (props) => {
    return(
      <h1>{props.name}</h1>
    )  
}

const Content = (props) =>{
    return (
      <div>
        {props.parts.map(part =>{
          return(
          <Part part = {part.name} exercises = {part.exercises}/>
        )})}
      </div>
    )
}

const Part = (props) =>{
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.reduce((total,part)=>{
      return total + part.exercises;
    },0)}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [ {
    name : 'Fundamentals of React',
    exercises : 10
    },
    {
    name :'Using props to pass data',
    exercises:7
    },
    {
    name: 'State of a component',
    exercises:14    
    }
  ]
  return (
    <>

      <Header name ={course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>

    </>
  )
}

export default App