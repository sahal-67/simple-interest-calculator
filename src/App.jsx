import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Stack, TextField } from '@mui/material'

function App() {
  const [amount,setamount] = useState("")
  const [rate,setrate]=useState("")
  const [year,setyear]=useState("")
  //console.log(amount,rate,year);
  const [isInvalidPrinciple,setInvaildPrinciple]= useState(false)
  const [isInvalidrate,setInvaildrate]= useState(false)
  const [isInvalidyear,setInvaildyear]= useState(false)

  const [Interest,setInterest]= useState("")

  const vaildRegex=/^[0-9]*.?[0-9]+$/



  const validateInput=(e)=>{
    //console.log(e);

    const {name,value}=e.target 
    //console.log(name,value);

    if(name=='principle'){
      setamount(value)
    }
    else if(name=='rate'){
      setrate(value)
    }
    else{
      setyear(value)
    }

   if( vaildRegex.test(value) || value==""){

    if(name=='principle'){
      setInvaildPrinciple(false)
    }
    else if(name=='rate'){
      setInvaildrate(false)
    }
    else{
      setInvaildyear(false)
    }

   } 
   else{
    if(name=='principle'){
      setInvaildPrinciple(true)
    }
    else if(name=='rate'){
      setInvaildrate(true)
    }
    else{
      setInvaildyear(true)
    }

   }

  }
  const handleCalculte=(e)=>{
    e.preventDefault()
    console.log("calculate");

    if(amount && rate && year){
      setInterest((amount*rate*year)/100)

      

    }
    else{
      alert("please enter the field completly")
    }
    
  }
  const handleReset=()=>{

    setamount("")
    setrate("")
    setyear("")
    setInterest(0)
    isInvalidPrinciple(false)
    isInvalidrate(false)
    isInvalidyear(false)

  }


  

  return (
    <>
    <div className='bg-dark d-flex align-items-center justify-content-center' style={{width:'100%',height:'100vh'}}>
      <div className='bg-light rounded p-5' style={{width:'650px'}}>
        <h2>Simple Interset Calculator</h2>
        <p>calculator your simple Interset easily</p>
        <div className='text-light bg-warning rounded d-flex align-items-center justify-content-center flex-column p-3'>
          <h1 style={{fontSize:'50px'}}>₹ <span>{Interest}</span> </h1>
          <h1>Total simple Interset</h1>
        </div>
          <div>
            <form className='mt-4'>
            <TextField onChange={validateInput} value={amount || ""} name='principle' id='principle_amount'  label="Amount" variant="outlined" className='w-100 mb-3' />
            { isInvalidPrinciple &&
              <div className='fw-bold text-danger'>Invaild principle amount</div>
            }
            <TextField onChange={validateInput} value={rate || ""} name='rate' id='interest-rate'  label="Interest" variant="outlined" className='w-100 mb-3' />
            { isInvalidrate &&
              <div className='fw-bold text-danger'>Invaild Interest amount</div>
            }
            <TextField onChange={validateInput} value={year || ""} name='year' id='time_period'  label="Year" variant="outlined" className='w-100 mb-3' />
            { isInvalidyear &&
              <div className='fw-bold text-danger'>Invaild Year</div>
            }

            <Stack direction="row" spacing={2}>

              <Button disabled={isInvalidPrinciple || isInvalidrate || isInvalidyear} type='submit' onClick={handleCalculte} variant="contained" className='w-50 me-3'>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" className='w-50 me-3'>Reset</Button>

            </Stack>


            </form>
          </div>
      </div>


    </div>

    </>
  )
}

export default App
