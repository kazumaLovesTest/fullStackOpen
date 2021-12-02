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
          <Part key = {part.name} name = {part.name} exercises = {part.exercises}/>
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
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return (
    <>

      <Header name ={course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>

    </>
  )
}

export default App