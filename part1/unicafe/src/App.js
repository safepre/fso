import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good+neutral+bad
  const avg = (good-bad)/(all)
  const positive = `${(good / all) * 100} %`
    if(all > 0)
    {
      return(
        <>
        <h1>statistics</h1>
        <table>
          <tbody>
            
            <StatisticsLine text="good" value ={good}/>
            <StatisticsLine text="neutral" value ={neutral}/>
            <StatisticsLine text="bad" value ={bad}/>
            <StatisticsLine text="all" value ={all}/>
            <StatisticsLine text="avg" value ={avg}/>
            <StatisticsLine text="positive" value ={positive}/>
          </tbody>
        </table>
        </>
      )
    }
    return(
      <p>No feedback given</p>
    )
}
const incrementOne = (state,setState) => () => setState(state+1)
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={incrementOne(good,setGood)} text="good"/>
      <Button onClick={incrementOne(neutral, setNeutral)} text="neutral"/>
      <Button onClick={incrementOne(bad,setBad)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
export default App