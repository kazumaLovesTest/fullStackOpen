import React from 'react'
import Courses from './Components/Courses'
// const Courses = ({courses}) =>{
//   return(<>
//       {courses.map((course) =><Course key = {course.id} course = {course}/>)}
//   </>)
// }

// const Course = ({course}) => {
//   return(
//     <>
//     <Header course = {course.name}/>
//     <Content parts = {course.parts} />
//     <Total parts = {course.parts} />
//     </>
//   )
// }
// const Header = ({course}) => {
//     return(
//       <h1>{course}</h1>
//     )  
// }

// const Content = ({parts}) =>{
//     return (
//       <div>
//         {parts.map(part =>{
//           return(
//           <Part key = {part.id} name = {part.name} exercises = {part.exercises}/>
//         )})}
//       </div>
//     )
// }

// const Part = ({name,exercises}) =>{
//   return (
//     <>
//       <p>{name} {exercises}</p>
//     </>
//   )
// }
// const Total = ({parts}) => {
//   return (
//     <p>Number of exercises {parts.reduce((total,part)=>{
//       return total + part.exercises;
//     },0)}</p>
//   )
// }

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <>
      <Courses courses = {courses} />
    </>
  )
}

export default App