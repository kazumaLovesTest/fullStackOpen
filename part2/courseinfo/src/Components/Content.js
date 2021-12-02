import React from 'react'

const Content = ({parts}) =>{
    return (
      <div>
        {parts.map(part =>{
          return(
          <Part key = {part.id} name = {part.name} exercises = {part.exercises}/>
        )})}
      </div>
    )
}
const Part = ({name,exercises}) =>{
    return (
      <>
        <p>{name} {exercises}</p>
      </>
    )
  }

export default Content