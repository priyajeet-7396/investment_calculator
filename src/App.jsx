import { useState } from "react"
import Input from "./components/Input"
import Result from "./components/Result"
import { calculateInvestmentResults } from "./util/investment"

function App() {
  const [ investment , setInvestment] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})

function handleChange(e){
  const {name , value} = e.target
  setInvestment(prevVaue=>({
      ...prevVaue,
      [name] : +value
  }))
}

const inputIsValid = investment.duration >=1



  return (
    <>
      <Input  onChange= {handleChange} investment={investment}/>
      {
        inputIsValid ? <Result data={investment} /> : <p className="center">Please enter a duration more than 0</p>
      }
      
    </>
  )
}
export default App
