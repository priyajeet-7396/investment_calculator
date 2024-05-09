


const Input = ({ onChange , investment}) => {


  return (
    <section id='user-input'>
    <div className='input-group'>
    <p>

    <label>Initial investment</label>
        <input type='number' onChange={ (e) => onChange(e)} name='initialInvestment' value={investment.initialInvestment}></input>
</p>
<p>
        <label>Annual Investment</label>
        <input type='number' onChange={ (e) => onChange(e)}  name='annualInvestment' value={investment.annualInvestment}></input>
    

    </p>
 
    </div>
    <div className='input-group'>

    <p>

    <label>Expected Return</label>
        <input type='number' onChange={(e) => onChange(e)} name='expectedReturn' value={investment.expectedReturn}></input>
    

    </p>
 
 <p>

 <label>Duration</label>
        <input type='number' onChange={(e) => onChange(e)} name='duration' value={investment.duration} ></input>
  

 </p>
  
      
    </div>
    </section>
  )
}

export default Input