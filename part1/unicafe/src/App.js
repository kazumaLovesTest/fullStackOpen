import React, { useState } from 'react'

const Button = ({onClick,text}) => (<button onClick = {onClick}>{text}</button>);
const EmotionValues = ({text,value}) => {
  return(
  <>
    <tr>
      <td>{text}</td>  <td>{value}</td>
    </tr>
  </>
  )};
const Positive = ({good,total}) => {

  return(
    <tr>
      <td>Positive</td> <td>{Math.round(((good * 100) / total)*10) / 10}%</td>
    </tr>
  )};
const Statistics = (({good,bad,neutral,total,average})=>{
  if (total === 0){
    return <p>No feedback yet</p>
  }
  else
    return(
    <>
      <EmotionValues text = "Good" value = {good} />
      <EmotionValues text = "Neutral" value = {neutral} />
      <EmotionValues text = "Bad" value = {bad} />
      <EmotionValues text = "Total" value = {total} />
      <Positive good = {good} total = {total} />
      <EmotionValues text = "Average" value = {average} />
    </>
    )
})

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setAll] = useState([]);
  
  const setToGood = () => {
    setAll(total.concat(1));
    setGood(good + 1);
  }

  const setToNeutral = () => {
    setAll(total.concat(1));
    setNeutral(neutral + 1);
  }

  const setToBad = () => {
    setAll(total.concat(1));
    setBad(bad + 1);
  }
  const getTotal = total.reduce((total)=>{return total + 1},0);
  const average = Math.round(((good - bad)/getTotal)*100) /100;


  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick = {setToGood} text = "Good" />
      <Button onClick = {setToNeutral} text = "Neutral" />
      <Button onClick = {setToBad} text ="Bad" />
      
      <h1>Statistics</h1>
      <Statistics total = {getTotal} average = {average} good = {good} bad = {bad} neutral = {neutral} />

    </div>
  )
}

export default App